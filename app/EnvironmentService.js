var app = angular.module('rtfmApp');

app.service('EnvironmentService', function($window) {
	this.getEnv = function() {
		return $window.env;
	}
	this.saveUserName = function(username) {
		$window.localStorage.setItem('username', username);
	}
	this.getUserName = function() {
		return $window.localStorage.getItem('username');
	}
});