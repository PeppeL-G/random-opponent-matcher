matchingAlgorithms['fifo'] = function(){
	
	if(this.searchers.length == 2){
		
		var user1 = this.searchers.shift()
		var user2 = this.searchers.shift()
		
		this.onMatch(user1, user2)
		
	}
	
}