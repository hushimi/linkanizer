'use strict'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const {app, protocol, BrowserWindow, shell, ipcMain} = require('electron')
const {createProtocol} = require('vue-cli-plugin-electron-builder/lib')
const isDevelopment = process.env.NODE_ENV !== 'production'

const os = require('os-utils')
const path = require('path')
const common = require('./common')
const db = require('./db')

// ------------------------------------
// スキーマ作成
// ------------------------------------
protocol.registerSchemesAsPrivileged([
	{ scheme: 'app', privileges: { secure: true, standard: true } },
])

// ------------------------------------
// メインウィンドウ作成
// ------------------------------------
async function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 800,
		backgroundColor: '#fff',
		icon: __dirname + '/../src/renderer/assets/image/appIcon.png',
		webPreferences: {
			// Required for Spectron testing
			enableRemoteModule: !!process.env.IS_TEST,

			nodeIntegration: false,
			contextIsolation: true,
			preload: path.resolve(__static, 'preload.js'),
		},
	})

	if (process.env.WEBPACK_DEV_SERVER_URL) {
		// Load the url of the dev server if in development mode
		await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
		if (!process.env.IS_TEST) mainWindow.webContents.openDevTools()
	} else {
		// Load the index.html when not in development
		createProtocol('app')
		mainWindow.loadURL('app://./index.html')
	}

	let isDBExist = common.checkFileExists(__dirname + '/../linkanizer.db')
	if (!isDBExist) {
		console.log('create table')
		db.createTable()
	}

	// PCリソース読み込み
	setInterval(() => {
		os.cpuUsage(function (v) {
			mainWindow.webContents.send('usage', {
				'cpu': (v*100).toFixed(2),
				'mem': (os.freememPercentage()*100).toFixed(2),
				'totalmem': (os.totalmem()/1024).toFixed(2)
			})
		})
	}, 1000)
}

// ------------------------------------
// when all window close
// ------------------------------------
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

// ------------------------------------
// For MacOS
// ------------------------------------
app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// ------------------------------------
// call createWindow when initialization ready
// ------------------------------------
app.on('ready', async () => {
	if (isDevelopment && !process.env.IS_TEST) {
		try {
			// Install Vue Devtools
			await installExtension(VUEJS3_DEVTOOLS)
		} catch (e) {
			console.error('Vue Devtools failed to install:', e.toString())
		}
	}
	createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
	if (process.platform === 'win32') {
		process.on('message', (data) => {
			if (data === 'graceful-exit') {
				app.quit()
			}
		})
	} else {
		process.on('SIGTERM', () => {
			app.quit()
		})
	}
}

// -----------------------------------------
// IPC通信処理
// -----------------------------------------
// リンクオープン
ipcMain.on('open', async (event, payload) => {
	const result = await shell.openPath(payload)
	event.reply('open', result)
})