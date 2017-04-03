const Server = require('app/lib/http/server')
const Requests = require('app/lib/http/requests')

module.exports = () => {
	const Init = {}

	const config = {
		MarkconfDir: process.cwd()
	}

	const server = Server(config)
	const requests = Requests(config)

	const serverConfig = {
		protocol: 'http',
		port: 8001,
		host: 'localhost',
		handler: requests.handler
	}

	const httpServer = server.create(serverConfig)

	Init.httpServer = httpServer

	return Init
}
