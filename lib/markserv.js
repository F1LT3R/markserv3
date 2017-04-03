#!/usr/bin/env node
const init = require('app/lib/core/init')

const CLI = !module.parent

if (CLI) {
	init(process.argv)
}

module.exports = init
