const path = require('path')

const meow = require('meow')

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

	Config.getMarkconfFile = () => {
		// if (cli.flags.markconf) {
		// 	const MarkconfJs = filesys.findFileUp(cwd, 'Markconf.js')
		// }

		const MarkconfJs = filesys.findFileUp(cwd, 'Markconf.js')

		if (MarkconfJs) {
			path.dirname(MarkconfJs)
		}

		return cwd
	}

	Config.args = argv
	Config.MarkconfRoot = Config.getMarkconfRoot()
	// Config.MarkconfFile = Config.getMarkconfFile()

	// console.log(Config)

	return Config
}
