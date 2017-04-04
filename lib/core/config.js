// const Filesys = require('app/lib/core/filesys')
// const filesys = Filesys()

module.exports = argv => {
	const Config = {}

	Config.args = argv
	Config.MarkconfDir = process.cwd()

	return Config
}
