const Markconf = {
	routes: [
		{
			path: '**/*.md',
			module: 'markserv-contrib-markdown',
			template: 'partials/index.html'
		}
	]
}

exports = Markconf