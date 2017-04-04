const path = require('path')
const fs = require('fs-extra')

module.exports = () => {
	const Filesys = {}

	Filesys.dirExistsSync = dir => {
		let exists

		try {
			const stat = fs.statSync(dir)
			if (stat.isDirectory()) {
				exists = true
			}
		} catch (err) {
			exists = false
		}

		return exists
	}

	Filesys.fileExistsSync = uri => {
		let exists

		try {
			const stat = fs.statSync(uri)
			if (stat.isFile()) {
				exists = true
			}
		} catch (err) {
			exists = false
		}

		return exists
	}

	Filesys.findFileUp = (dir, fileToFind) => {
		const filepath = path.join(dir, fileToFind)
		const existsHere = Filesys.fileExistsSync(filepath)

		if (dir === path.sep) {
			return false
		}

		if (existsHere) {
			return filepath
		}

		const nextDirUp = path.dirname(dir)
		return Filesys.findFileUp(nextDirUp, fileToFind)
	}

	return Filesys
}