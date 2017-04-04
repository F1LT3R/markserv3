const path = require('path')
const chai = require('chai')
const Service = require('app/lib/core/service')

const expect = chai.expect

const specPath = path.relative(process.cwd(), __filename).split('.spec')[0] + '.js'

describe(specPath, () => {
	it('should return initialized markserv server', () => {
		const config = {}
		const service = Service(config)

		expect(service).to.be.an('object')
		expect(service.config).to.be.an('object')
		expect(service.httpServer).to.be.an('object')
	})
})
