const os = require('os-utils')

/**
 * ----------------------------------------------
 * Display resource usage
 * @type {BrowserWindow} mainWindow
 * ----------------------------------------------
 */
function getUsage() {
	console.log((os.freememPercentage() * 100).toFixed(2))
}

module.exports = {
	getUsage
}