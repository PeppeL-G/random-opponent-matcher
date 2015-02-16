# random-opponent-matcher
A Meteor package pairing together opponents randomly.

This package has a nice interface, but a poor implementation. If I find it
necessary in the future, I will spend time on improving it. If you need
improvements done now, feel free to do them yourself.

##Guide
On the server, you need to do something like this:

```javascript
var name = 'my-name' // The corresponding matcher on the client should have the same name.
var algorithm = { // This is the only one available at the moment.
	name: 'fifo'
}
var onMatch = function(user1, user2){
	// Gets called when two users been matched to play against each other.
	// The argumetns are objects looking like this:
	// {
	// 	userId: "_id of the user doc"
	// }
}

var myMatcher = new RandomOpponentMatcher(name, algorithm, onMatch)
```

On the client, you need to do something like this:

```javascript
var name = 'my-name' // The corresponding matcher on the server should have the same name.

var myMatcher = new RandomOpponentMatcher(name)

// When the user is logged in, call the method add to start searching for an opponent for the user.
myMatcher.add()

// When a opponent been matched, the onMatch function will get executed on the server.
// This package does not provide a way to notify the client when it's been matched.

// If you want to abort the search, call the method remove.
myMatcher.remove()
```