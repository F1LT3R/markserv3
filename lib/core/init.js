const Server = require('app/lib/http/server')
const Requests = require('app/lib/http/requests')

module.exports = () => {
	const Init = {}

	Init.config = {
		MarkconfDir: process.cwd()
	}

	const server = Server(Init.config)
	const requests = Requests(Init.config)

	const serverConfig = {
		protocol: 'http',
		port: 8001,
		host: 'localhost',
		handler: requests.handler
	}

	Init.httpServer = server.create(serverConfig)

	return Init
}
