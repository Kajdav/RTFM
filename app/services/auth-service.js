var app = angular.module('rtfm');

app.service('authService', function($firebase, $firebaseAuth, environmentService){
	this.register = function(newUserObj){
		var authObject = $firebaseAuth(new Firebase(environmentService.getEnv().firebase))
		return authObject.$createUser({
			email: newUserObj.email,
			password: newUserObj.password
		}).then(function(userData){
			console.log('GOT HERE!')
			console.log(userData);
			return authObject.$authWithPassword({
				email: newUserObj.email,
				password: newUserObj.password
			}, function(err){
				console.log(err)
			})
		}).then(function(authData){
			console.log(authData);
			return {authData: authData, userObj:{
				username: newUserObj.username,
				email: newUserObj.email
			}}
		})
	}
})