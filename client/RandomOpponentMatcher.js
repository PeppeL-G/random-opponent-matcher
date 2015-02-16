/*
 * Creates a new random opponent matcher on the client. The server should have
 * one corresponding instance with the same name parameter.
 * 
 * Parameters:
 *  -name: A name used to connect it with the corresponding instance on the
 *         server.
 */
RandomOpponentMatcher = function(name){
	this.name = name
}

/*
 * Call this to start searching for a random opponent for the signed in user.
 */
RandomOpponentMatcher.prototype.add = function(){
	Meteor.call('peppelg:random-opponent-searcher_addCurrentUser', this.name)
}

/*
 * Call this to stop searching for a random opponent for the signed in user.
 */
RandomOpponentMatcher.prototype.remove = function(){
	Meteor.call('peppelg:random-opponent-searcher_removeCurrentUser', this.name)
}