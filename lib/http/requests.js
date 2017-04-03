const Paths = require('app/lib/core/paths')

const requestsInit = config => {
	const paths = Paths(config)

	const Requests = {a: 1}

	Requests.handler = (req, res) => {
		res.writeHead(200, {'Content-Type': 'text/plain'})

		const requestUri = req.url

		console.log('...........')
		console.log(requestUri)

		const fileUri = paths.absolute(requestUri)
		console.log(fileUri)
		res.end(fileUri)
	}

	return Requests
}

module.exports = requestsInit
