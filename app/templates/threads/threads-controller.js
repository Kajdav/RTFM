var app = angular.module('rtfm');

app.controller('threadsCtrl', function($rootScope, $scope, threadService, threadsThing){

	$scope.threads = threadsThing.$asArray();

	console.log($scope.threads);

	$scope.createThread = function(title){
		$scope.threads.$add({
			username: $rootScope.user,
			title: title
		})
	}

})