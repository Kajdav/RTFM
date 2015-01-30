var app = angular.module("rtfm");

app.service('threadService', function($firebase, environmentService){
	var firebaseUrl = environmentService.getEnv().firebase;

	this.getThreads = function(){
		return $firebase(new Firebase(firebaseUrl + '/threads'));
	};

	this.getThread = function(id){
		return $firebase(new Firebase(firebaseUrl + '/threads/' + id))
	};

	this.getComments = function(id){
		return $firebase(new Firebase(firebaseUrl + '/threads/' + id + '/comments'))
	};

})


		// var url = environmentService.getEnv().firebase;
		// var ref = new Firebase(url);
		// var thing = $firebase(ref);
		// var thingObject = thing.$asObject();
		// var thingArray = thing.$asArray();

		// thingArray.$add(thingToPush);