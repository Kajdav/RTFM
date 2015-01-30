var app = angular.module('rtfm');

app.controller('singleThreadCtrl', function($rootScope, $scope, commentsRef, threadRef){
	var thread = threadRef.$asObject();

	thread.$bindTo($scope, 'thread');

	$scope.comments = commentsRef.$asArray();

	$scope.createComment = function(text){
		$scope.comments.$add({
			username: $rootScope.user,
			text: text
		});
	}



})