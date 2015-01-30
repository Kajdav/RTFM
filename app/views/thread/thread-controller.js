var app = angular.module('rtfm');

app.controller('threadCtrl', function($scope, threadRef, commentsRef){
	var thread = threadRef.$asObject();

	thread.$bindTo($scope, 'thread');

	$scope.comments = commentsRef.$asArray();

	$scope.createComment = function(username, comment){
		$scope.comments.$add({
			username: username,
			text: comment
		})
	}

})