'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const { ipcMain } = require('electron')
const os = require('os-utils')
const path = require('path')
// const fs = require('fs')

// ------------------------------------
// create schema before app is ready
// ------------------------------------
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
])

// ------------------------------------
// create main window
// ------------------------------------
async function createWindow() {
  const win = new BrowserWindow({
    backgroundColor: '#fff',
    width: 1200,
    height: 1000,
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
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  setInterval(() => {
    os.cpuUsage(function (v) {
      win.webContents.send('usage', {
        'cpu': (v*100).toFixed(2),
        'mem': (os.freememPercentage()*100).toFixed(2),
        'totalmem': (os.totalmem()/1024).toFixed(2)
      })
      // win.webContents.send('cpu', (v*100).toFixed(2))
      // win.webContents.send('mem', (os.freememPercentage()*100).toFixed(2))
      // win.webContents.send('totalmem', (os.totalmem()/1024).toFixed(2))
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
    // Install Vue Devtools
    try {
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
// Handle IPC process
// -----------------------------------------
ipcMain.on('READ_FILE', (event, payload) => {
  // const content = fs.readFileSync(payload.path)
  const content = payload.path
  event.reply('READ_FILE', { content })
})