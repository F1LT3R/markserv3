const path = require('path')

const filesys = require('app/lib/core/filesys')()

module.exports = config => {
	const {MarkconfRoot} = config

	const Routes = {
		handlers: {},
		templates: {}
	}

	const moduleLoaders = {
		nodeModules: name => {
			try {
				const mod = require(name)
				return mod
			} catch (err) {
				console.log(err)
				return moduleLoaders.nodeModules(name)
			}
		},

		script: name => {
			try {
				const uri = path.join(MarkconfRoot, name)
				const mod = require(uri)
				return mod
			} catch (err) {
				console.log(err)
				return false
			}
		}
	}

	const loadModule = name => {
		return moduleLoaders.script(name)
	}

	const loadTemplate = file => {
		try {
			console.log(1, MarkconfRoot, file)
			const uri = path.join(MarkconfRoot, file)
			const template = filesys.loadFileSync(uri)
			return template
		} catch (err) {
			console.log(err)
			return false
		}
	}

	const routeList = config.MarkconfData.routes

	routeList.forEach(route => {
		const {path, module, template} = route

		const markserv = {
			root: MarkconfRoot
		}

		const handler = {
			module,
			pattern: path,
			callback: loadModule(module)(markserv)
		}

		if (template) {
			handler.template = loadTemplate(template)
		}

		Routes.handlers[module] = handler
	})

	return Routes
}
