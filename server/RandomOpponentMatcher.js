/*
 * Creates a new random opponent matcher on the server. The client should have
 * one corresponding instance with the same name parameter.
 * 
 * Parameters:
 *  -name:      A name used to connect it with the corresponding instance on
 *              the client.
 *  -algorithm: An object with information about the matching algorithm to use.
 *              The name property reveals which algorithm to use. At the moment,
 *              only `fifo` is available.
 *  -onMatch:   A function that will get called when two opponents been
 *              matched. The opponents user ids will be passed as the first and
 *              second arguments. When two opponents been matched, there's no
 *              need to call randomOpponentMatcher.remove on the client.
 */
RandomOpponentMatcher = function(name, algorithm, onMatch){
	
	this.tryToFindMatches = matchingAlgorithms[algorithm.name].bind(this)
	this.searchers = []
	this.onMatch = onMatch
	
	matchers[name] = this
	
}

/////////////////////// Above is the public API. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/////////////////////// Below is the private API. \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

RandomOpponentMatcher.prototype.getIndex = function(userId){
	
	var length = this.searchers.length
	
	for(var i=0; i<length; i++){
		
		var searcher = this.searchers[i]
		
		if(searcher.userId == userId){
			return i
		}
		
	}
	
	return -1
	
}

RandomOpponentMatcher.prototype.remove = function(userId){
	
	var index = this.getIndex(userId)
	
	if(index != -1){
		this.searchers.splice(index, 1)
	}
	
}