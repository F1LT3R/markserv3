const Markconf = {
	routes: [
		{
			path: '**/*.md',
			module: 'lib/modules/markdown/markserv-markdown'
		},
		{
			path: '**/',
			module: 'lib/modules/dir/markserv-dir',
			template: 'lib/modules/dir/markserv-dir.html'
		},
		{
			path: '**/*',
			module: 'lib/modules/file/markserv-file'
		}
	]
}

module.exports = Markconf
