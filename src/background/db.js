const sqlite3 = require('sqlite3').verbose()

/**
 * ----------------------------------------------
 * テーブル作成のクエリを実行する
 * @type {string} filePath
 *
 * @return {boolean}
 * ----------------------------------------------
 */
function createTable() {
	const db = new sqlite3.Database('linkanizer.db')
	db.serialize(function () {
		// m_folder
		db.run('CREATE TABLE m_folder ' +
            '(id integer primary key autoincrement, folder_name text)'
		)

		// m_link
		db.run('CREATE TABLE m_link ' +
            '(id integer primary key autoincrement, folder_id integer, link_name text, link_url text, search_tag text)'
		)
	})
	db.close()
}

module.exports = {
	createTable
}