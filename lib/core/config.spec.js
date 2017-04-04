const path = require('path')
const chai = require('chai')
const Config = require('app/lib/core/config')

const expect = chai.expect

const specPath = path.relative(process.cwd(), __filename).split('.spec')[0] + '.js'

describe(specPath, () => {
	describe('should initialize with config ojbect', () => {
		const config = Config()
		expect(config).to.be.an('object')
	})
})
