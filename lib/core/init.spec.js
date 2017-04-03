const path = require('path')
const chai = require('chai')
const Init = require('app/lib/core/init')

const expect = chai.expect

const specPath = path.relative(process.cwd(), __filename).split('.spec')[0] + '.js'

describe(specPath, () => {
	it('should return initialized markserv server', () => {
		const config = {}
		const init = Init(config)

		expect(init).to.be.an('object')
		expect(init.httpServer).to.be.an('object')
	})
})
