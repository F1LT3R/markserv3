const path = require('path')
const fs = require('fs-extra')

module.exports = config => {
	const Paths = {}

	Paths.normalized = requestUri => {
		return path.normalize(requestUri)
	}

	Paths.absolute = requestUri => {
		return path.join(config.MarkconfDir, requestUri)
	}

	Paths.dirExistsSync = dir => {
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

	Paths.fileExistsSync = uri => {
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

	return Paths
}
