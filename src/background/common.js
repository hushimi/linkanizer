const { existsSync } = require('fs')

/**
 * ----------------------------------------------
 * ファイル存在確認
 * @type {string} filePath
 *
 * @return {boolean}
 * ----------------------------------------------
 */
function checkFileExists(filePath) {
	let isExists = false
	try {
		if (existsSync(filePath)) {
			isExists = true
		}
	} catch (err) {
		console.error(err)
	}
	return isExists
}

module.exports = {
	checkFileExists
}