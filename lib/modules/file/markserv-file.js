const path = require('path')
const send = require('send')

module.exports = markserv => {
	return (fileUri, req, res) => new Promise((resolve, reject) => {
		console.log(fileUri)

		send(req, path.basename(fileUri), {
			root: path.dirname(fileUri),
			dotfiles: 'allow'
		})
		.on('error', err => {
			markserv.log.error(err)
			console.log(err)
			reject(err)
		})
		.pipe(res)

		// Explicitly return nothing to the request handler as we are handling
		// the response ourselves within this plug-in
		resolve(null)
	})
}
