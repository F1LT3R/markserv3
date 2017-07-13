const path = require('path')

const meow = require('meow')

const log = require('app/lib/core/log')
const filesys = require('app/lib/core/filesys')()

const help = `
	Usage
	  $ markserv

	Options
	  --markconf  Markconf.js file to use
	  --dir  Directory to serve files from

	Examples
	  $ markserv -markconf ~/Desktop/Markconf.js
`

/**
 * Config - service configuration "properties" only (no methods)
 * @constructor
 * @param {object} argv - CLI flags
 */

module.exports = argv => {
	const Config = {}

	const cwd = process.cwd()
	const cli = meow({help, argv})

	Config.getMarkconfRoot = () => {
		if (cli.flags.dir) {
			const MarkconfJs = filesys.findFileUp(cli.flags.dir, 'Markconf.js')

			if (MarkconfJs) {
				return path.dirname(MarkconfJs)
			}

			if (filesys.dirExistsSync(cli.flags.dir)) {
				return cli.flags.dir
			}

			return cwd
		}

		const MarkconfJs = filesys.findFileUp(cwd, 'Markconf.js')

		if (typeof MarkconfJs === 'string') {
			return path.dirname(MarkconfJs)
		}

		return cwd
	}

	Config.getMarkconfFile = uri => {
		const MarkconfFilePath = path.join(uri, 'Markconf.js')
		const MarkconfJs = filesys.fileExistsSync(MarkconfFilePath)

		if (MarkconfJs) {
			return MarkconfFilePath
		}

		// There will always be a Markconf.js file in the root of the Markserv package
		const dirRelativeToThisFile = path.dirname(__filename)
		const MarkservDefaultMarkconfFile = filesys.findFileUp(dirRelativeToThisFile, 'Markconf.js')

		return MarkservDefaultMarkconfFile
	}

	Config.loadMarkconfJsFile = uri => {
		const MarkconfJSData = require(uri)
		return MarkconfJSData
	}

	Config.setLogLevel = argv => {
		console.log(argv)
		log.info('')
	}

	Config.args = argv
	Config.MarkconfRoot = Config.getMarkconfRoot()
	Config.MarkconfFile = Config.getMarkconfFile(Config.MarkconfRoot)
	Config.MarkconfData = Config.loadMarkconfJsFile(Config.MarkconfFile)

	return Config
}
