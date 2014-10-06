var app = angular.module('rtfmApp');

app.controller('loginControl', function($scope, EnvironmentService, $location){
	$scope.env = EnvironmentService.getEnv();
	$scope.logMeIn = function(username){
		EnvironmentService.saveUserName(username);
		alert(username);
		$location.path('/threads');
	}
})