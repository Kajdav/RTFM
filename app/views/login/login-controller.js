angular.module('rtfm')
	.controller('loginCtrl', function($scope, $location, environmentService){

		var env = environmentService.getEnv();

		$scope.logMeIn = function(username){
			environmentService.saveUsername(username);
			$location.path('/threads');
		}


	});