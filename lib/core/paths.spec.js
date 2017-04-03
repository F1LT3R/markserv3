const path = require('path')
const chai = require('chai')
const Paths = require('app/lib/core/paths')

const expect = chai.expect

const specPath = path.relative(process.cwd(), __filename).split('.spec')[0] + '.js'

describe(specPath, () => {
	describe('.normalize()', () => {
		const config = {}
		const paths = Paths(config)

		expect(paths).to.be.an('object')

		const checks = [
			['/../something', '/something'],
			['../something', '../something'],
			['./abc/../abc', 'abc']
		]

		checks.forEach(check => {
			const input = check[0]
			const expected = check[1]
			it(`"${input}" should normalize to "${expected}"`, () => {
				const actual = paths.normalized(input)
				expect(actual).to.equal(expected)
			})
		})
	})

	describe('.absolute()', () => {
		const MarkconfDir = '/Users/user/dir'
		const config = {MarkconfDir}
		const paths = Paths(config)

		expect(paths).to.be.an('object')

		const checks = [
			['/', '/Users/user/dir/'],
			['/test/', '/Users/user/dir/test/'],
			['test/', '/Users/user/dir/test/'],
			['test', '/Users/user/dir/test'],
			['../test/', '/Users/user/test/']
		]

		checks.forEach(check => {
			const input = check[0]
			const expected = check[1]
			it(`"${input}" should resolve to "${expected}"`, () => {
				const actual = paths.absolute(input)
				expect(actual).to.equal(expected)
			})
		})
	})

	describe('.dirExistsSync()', () => {
		const config = {}
		const paths = Paths(config)

		expect(paths).to.be.an('object')

		it(`"${__dirname}" should exist`, () => {
			const actual = paths.dirExistsSync(__dirname)
			expect(actual).to.equal(true)
		})

		const bogusDir = path.join(__dirname, 'bogus')
		it(`"${bogusDir}" should not exist`, () => {
			const actual = paths.dirExistsSync(bogusDir)
			expect(actual).to.equal(false)
		})
	})

	describe('.fileExistsSync()', () => {
		const config = {}
		const paths = Paths(config)

		expect(paths).to.be.an('object')

		it(`"${__filename}" should exist`, () => {
			const actual = paths.fileExistsSync(__filename)
			expect(actual).to.equal(true)
		})

		const bogusFile = path.join(__dirname, 'bogus-file.js')
		it(`"${bogusFile}" should not exist`, () => {
			const actual = paths.dirExistsSync(bogusFile)
			expect(actual).to.equal(false)
		})
	})
})
