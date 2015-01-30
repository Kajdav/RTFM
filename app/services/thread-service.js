var app = angular.module('rtfm');

app.service('threadService', function($firebase, environmentService){
	var fbUrl = environmentService.getEnv().firebase;

	this.getThreads = function(){
		return $firebase(new Firebase(fbUrl + '/threads'));
	};

	this.getThread = function(id){
		return $firebase(new Firebase(fbUrl + '/threads/' + id));
	};

	this.getComments = function(id){
		return $firebase(new Firebase(fbUrl + '/threads/' + id + '/comments'))
	}

});