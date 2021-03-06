const fs = require('fs')
const path = require('path')
const mime = require('mime')

module.exports = markserv => (fileUri, req, res) => new Promise((resolve, reject) => {
	const filename = path.basename(fileUri)
	const mimetype = mime.lookup(filename)

	res.setHeader('Content-type', mimetype)

	const fileStream = fs.createReadStream(fileUri)

	fileStream.on('error', err => {
		markserv.log.error(err)
		console.log(err)
		reject(err)
	})

	// Explicitly return nothing to the request handler as we are handling
	// the response ourselves within this plug-in
	fileStream.on('end', () => {
		resolve(null)
	})

	fileStream.pipe(res)
})

