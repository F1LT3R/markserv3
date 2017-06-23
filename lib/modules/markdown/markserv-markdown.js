module.exports = markserv => {
	console.log(markserv)

	return (fileUri, req, res) => new Promise((resolve, reject) => {
		const payload = {
			code: 200,

			headers: {
				'Content-Type': 'text/plain'
			},

			body: 'MARKDOWN MODULE:' + fileUri
		}

		resolve(payload)
	})
}
