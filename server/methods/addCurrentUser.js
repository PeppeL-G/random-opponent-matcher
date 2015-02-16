Meteor.methods({
	'peppelg:random-opponent-searcher_addCurrentUser': function(matcherName){
		
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
		
		// If the user is not already added...
		if(matcher.getIndex(this.userId) == -1){
			
			// ...add it to the list of random opponent searchers...
			matcher.searchers.push({
				userId: this.userId
			})
			
			// ...and try to find matches.
			matcher.tryToFindMatches()
			
		}
		
	}
})