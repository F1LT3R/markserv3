const http = require('http')

const create = (port, hostname, callback) => {
	const server = http.createServer(callback)

	server.listen(port, hostname)

	return server
}

module.exports = {
	create
}
