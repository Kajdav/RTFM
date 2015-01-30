var app = angular.module('rtfm');

app.controller('threadsCtrl', function($scope, threadsRef){
	$scope.threads = threadsRef.$asArray();

	$scope.createThread = function(username, threadName){
		$scope.threads.$add({
			title: threadName,
			username: username
		})
	}
})