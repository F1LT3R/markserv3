const chai = require('chai')
const Log = require('app/lib/core/log')

const expect = chai.expect

describe('Log', () => {
	describe('constructor', () => {
		it('should initialize', () => {
			const argv = []
			const log = Log(argv)
			expect(log).to.be.an('object')
		})
	})

	describe('enums', () => {
		it('should match', () => {
			const argv = []
			const log = Log(argv)

			const expected = [
				'0',
				'1',
				'2',
				'3',
				'4',
				'5',
				'TRACE',
				'DEBUG',
				'INFO',
				'WARN',
				'ERROR',
				'FATAL'
			]

			Reflect.ownKeys(log.levels).forEach((key, i) => {
				expect(key).to.equal(expected[i])
			})
		})
	})
})
