var app = angular.module('rtfm')

app.controller('loginCtrl', function($scope, $location, environmentService){
	
	$scope.login = function(username){
		environmentService.saveUsername(username);
		console.log(environmentService.getUsername());
		$location.path('/threads');
	}

});