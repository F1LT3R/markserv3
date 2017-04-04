const path = require('path')
const chai = require('chai')
const Markconf = require('app/lib/Markconf.js')

const expect = chai.expect

const specPath = path.relative(process.cwd(), __filename).split('.spec')[0] + '.js'

describe(specPath, () => {
	it('should provide a Markconf oject', () => {
		expect(Markconf).to.be.an('object')
	})
})
