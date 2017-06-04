const path = require('path')

/**
 * Creates helpers for Paths
 * @constructor
 * @param {object} config - the Markserv Service config
 */
module.exports = config => {
	const Paths = {}

	Paths.normalized = requestUri => {
		return path.normalize(requestUri)
	}

	/**
	* Turns a relative request path into a absolute system path
	* that is relative to the MarkconfRoot. The absolute path is
	* used to get valid references to files that will be read
	* from the file system for processing.
	* @ method
	* @param {string} requestUri - the request URI relative to
	* the root of the MarkconfRoot
	*/
	Paths.absolute = requestUri => {
		return path.join(config.MarkconfRoot, requestUri)
	}

	return Paths
}
