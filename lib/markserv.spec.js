const path = require('path')
const chai = require('chai')
const Markserv = require('app/lib/markserv')

const expect = chai.expect

const specPath = path.relative(process.cwd(), __filename).split('.spec')[0] + '.js'

describe(specPath, () => {
	it('should init in api mode', () => {
		const argv = []
		const markserv = Markserv(argv)

		expect(markserv).to.be.an('object')
		expect(markserv.service.config).to.be.an('object')
		expect(markserv.service.httpServer).to.be.an('object')
	})
})
