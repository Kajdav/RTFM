var app = angular.module('rtfmApp');

app.controller('loginControl', function($scope, EnvironmentService, $location){
	$scope.env = EnvironmentService.getEnv();
	$scope.logMeIn = function(username){
		alert(username);
	}
})