module.exports = argv => {
	const Config = {}

	Config.args = argv
	Config.MarkconfDir = process.cwd()

	return Config
}
