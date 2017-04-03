const http = require('http')

module.exports = () => {
	const Server = {}

	Server.instance = null

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

	Server.close = callback => {
		return Server.instance.close(() => {
			Server.instance = null

			if (callback) {
				return callback()
			}
		})
	}

	Server.create = serverConfig => {
		Server.configure(serverConfig)
		Server.instance = protocol[Server.config.protocol].createServer(Server.config.handler)
		Server.instance.listen(Server.config.port, Server.config.url)
		return Server.instance
	}

	return Server
}
