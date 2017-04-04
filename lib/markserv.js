#!/usr/bin/env node
const init = require('app/lib/core/init')

module.exports = argv => {
	const Markserv = {}

	Markserv.service = init(argv)

	return Markserv
}

const CLI = !module.parent

if (CLI) {
	exports.init(process.argv)
}
