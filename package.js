Package.describe({
	name: 'peppelg:random-opponent-matcher',
	version: '0.0.1',
	summary: 'Pairs opponents together randomly.',
	git: 'https://github.com/PeppeL-G/random-opponent-matcher.git',
	documentation: 'README.md'
})

Package.onUse(function(api) {
	
	api.versionsFrom('1.0.3.1')
	
	api.addFiles('client/RandomOpponentMatcher.js',     'client')
	
	api.addFiles('server/packageVariables.js',          'server')
	api.addFiles('server/matchingAlgorithms/fifo.js',   'server')
	api.addFiles('server/RandomOpponentMatcher.js',     'server')
	api.addFiles('server/methods/addCurrentUser.js',    'server')
	api.addFiles('server/methods/removeCurrentUser.js', 'server')
	
	api.export('RandomOpponentMatcher', ['client', 'server'])
	
})