var app = angular.module('rtfmApp');

app.controller('threadControl', function($scope, threadRef, commentsRef){
	var thread = threadRef.$asObject();
	$scope.comments = commentsRef.$asArray();
	thread.$bindTo($scope, 'thread');
	$scope.createComment = function(username, text) {
		$scope.comments.$add({
			username: username,
			text: text
		});
	};
});