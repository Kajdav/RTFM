angular.module('rtfm')
	.controller('loginCtrl', function($scope, $location, environmentService, authService){

		var env = environmentService.getEnv();

		$scope.register = function(){
			authService.register($scope.newUser).then(function(data){
				console.log(data);
				$location.path('/threads');
			},
			function(err){
				console.log(err)
			});
			// console.log(authService.register($scope.newUser));
		}


	});