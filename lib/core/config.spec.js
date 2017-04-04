const path = require('path')
const chai = require('chai')
const Config = require('app/lib/core/config')
const filesys = require('app/lib/core/filesys')()

const expect = chai.expect

const specPath = path.relative(process.cwd(), __filename).split('.spec')[0] + '.js'

describe(specPath, () => {
	describe('module.exports', () => {
		it('should initialize with config object', () => {
			const argv = []
			const config = Config(argv)
			expect(config).to.be.an('object')
		})
	})

	describe('.getMarkconfRoot()', () => {
		it('user should be able to define a server root with cli args', () => {
			const userRoot = path.join(path.dirname(__filename))

			const argv = ['--dir', userRoot]
			const config = Config(argv)
			const relativeConf = path.relative(userRoot, config.MarkconfRoot)

			expect(config.MarkconfRoot).to.be.a('string')
			expect(relativeConf).to.equal('../..')
		})

		it('should default to nearest Markconf.js if no args provded', () => {
			const argv = []
			const config = Config(argv)

			const specDirAbs = path.resolve(path.dirname(__filename))
			const MarkconfRootRel = path.relative(specDirAbs, config.MarkconfRoot)

			expect(config.MarkconfRoot).to.be.a('string')
			expect(MarkconfRootRel).to.equal('../..')
		})

		it('should use cwd as dir if no Markconf.js is found', () => {
			const bogusPath = path.join(path.sep, 'totally', 'bogus', 'path')

			const argv = ['--dir', bogusPath]
			const config = Config(argv)

			expect(config.MarkconfRoot).to.be.a('string')
			expect(config.MarkconfRoot).to.equal(process.cwd())
		})

		it('should use cwd as dir if no Markconf.js is found and no args are provided', () => {
			const originalCwd = process.cwd()
			const packageJsonUri = filesys.findFileUp(process.cwd(), 'package.json')
			const packageJsonDir = path.dirname(packageJsonUri)
			const outerDir = path.dirname(packageJsonDir)

			process.chdir(outerDir)

			const argv = []
			const config = Config(argv)

			// Put the dir back (CAREFUL!)
			process.chdir(originalCwd)

			expect(config.MarkconfRoot).to.be.a('string')
			expect(config.MarkconfRoot).to.equal(outerDir)
		})

		it('should use user provided dir as dir if no Markconf.js is found and user provided dir exists', () => {
			const originalCwd = process.cwd()
			const packageJsonUri = filesys.findFileUp(process.cwd(), 'package.json')
			const packageJsonDir = path.dirname(packageJsonUri)
			const outerDir = path.dirname(packageJsonDir)

			process.chdir(outerDir)

			const argv = ['--dir', outerDir]
			const config = Config(argv)

			// Put the dir back (CAREFUL!)
			process.chdir(originalCwd)

			expect(config.MarkconfRoot).to.be.a('string')
			expect(config.MarkconfRoot).to.equal(outerDir)
		})
	})
})
