Meteor.methods({
	'peppelg:random-opponent-searcher_removeCurrentUser': function(matcherName){
		
		check(matcherName, String)
		
		// Must be signed in.
		if(!this.userId){
			return
		}
		
		// The matcher must exists.
		matcher = matchers[matcherName]
		
		if(!matcher){
			return
		}
		
		// Remove the user from the list of searchers.
		matcher.remove(this.userId)
		
	}
})