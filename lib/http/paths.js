const path = require('path')

module.exports = config => {
	const Paths = {}

	Paths.normalized = requestUri => {
		return path.normalize(requestUri)
	}

	Paths.absolute = requestUri => {
		return path.join(config.MarkconfDir, requestUri)
	}

	return Paths
}
