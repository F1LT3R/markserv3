const Paths = require('app/lib/http/paths')

const requestsInit = (config, routeHandlers, log) => {
	const paths = Paths(config)

	const Requests = {a: 1}

	Requests.handler = (req, res) => {
		res.writeHead(200, {'Content-Type': 'text/plain'})

		const requestUri = req.url
		log.info(requestUri)

		const fileUri = paths.absolute(requestUri)
		log.info(fileUri)

		res.end(fileUri)
	}

	return Requests
}

module.exports = requestsInit
