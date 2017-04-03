const http = require('http')

module.exports = () => {
	const Server = {}

	let activeServer

	Server.config = {
		protocol: null,
		port: null,
		host: null,
		handler: null
	}

	Server.configure = serverConfig => {
		Server.config.protocol = serverConfig.protocol
		Server.config.port = serverConfig.port
		Server.config.host = serverConfig.host
		Server.config.handler = serverConfig.handler
	}

	const protocol = {
		http
	}

	Server.create = serverConfig => {
		Server.configure(serverConfig)
		activeServer = protocol[Server.config.protocol].createServer(Server.config.handler)
		activeServer.listen(Server.config.port, Server.config.url)
		return activeServer
	}

	return Server
}
