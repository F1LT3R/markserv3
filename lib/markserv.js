#!/usr/bin/env node

/**
 * The main bin module that triggers initialization of Markserv in CLI or API
 * mode. API Mode is used when requiring Markserv in another project, or testing
 * the codebase.
 * @module Markserv
 */

const Service = require('app/lib/core/service')

/**
 * Module exports
 * @param {argv} - array of arguments from the terminal or api
 * @returns {Markserv}
 */

module.exports = argv => {
	const Markserv = {}

	Markserv.service = Service(argv)

	return Markserv
}

const CLI = !module.parent

if (CLI) {
	module.exports = Service(process.argv).service
}
