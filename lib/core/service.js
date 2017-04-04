const Config = require('app/lib/core/config')
const Server = require('app/lib/http/server')
const Requests = require('app/lib/http/requests')
// const Routes = require('app/lib/core/routes')

module.exports = argv => {
	const Service = {}

	Service.config = Config(argv)

	// const routes = Routes(Init.config)
	const requests = Requests(Service.config)
	// const requests = Requests(Init.config, routes.handlers)

	const server = Server(Service.config)

	const serverConfig = {
		protocol: 'http',
		port: 8001,
		host: 'localhost',
		handler: requests.handler
	}

	Service.httpServer = server.create(serverConfig)

	return Service
}
