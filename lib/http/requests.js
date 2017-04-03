const Paths = require('app/lib/core/paths')

const requestsInit = config => {
	const paths = Paths(config)

	const Requests = {}

	Requests.handler = (req, res) => {
		const requestUri = req.url

		const fileUri = paths.absolute(requestUri)
		console.log('...........')
		console.log(requestUri)
		console.log(fileUri)

		res.end(fileUri)
	}

	return Requests
}

module.exports = requestsInit
