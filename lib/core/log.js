/**
 * Log - generates output to console and or file
 * @constructor
 * @param {object} config - the Markserv Service config
 */

module.exports = argv => {
	const Log = {}

	Log.levels = {
		TRACE: 0,
		DEBUG: 1,
		INFO: 2,
		WARN: 3,
		ERROR: 4,
		FATAL: 5,
		0: 'TRACE',
		1: 'DEBUG',
		2: 'INFO',
		3: 'WARN',
		4: 'ERROR',
		5: 'FATAL'
	}

	Log.settings = {
		file: {
			path: '',
			level: 'warn'
		},

		console: {
			path: '',
			level: ''
		}
	}

	// Log.console =

	Log.decorate = (message, level, type) => {
	}

	Log.toConsole = (message, level) => {
		// const output = decorate(message, level, 'console')

		if (Reflect.has(console, level)) {
			console[level](message)
		}
	}

	Log.toFile = (message, level) => {
	}

	Log.info = message => {
		Log.toConsole(message, 'log')
	}

	return Log
}

