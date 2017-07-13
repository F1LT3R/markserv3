module.exports = markserv => {
	console.log(markserv)

	return fileUri => new Promise(resolve => {
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
