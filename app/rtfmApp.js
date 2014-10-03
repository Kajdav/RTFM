var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: '/pages/login/login.html',
			controller: 'loginControl'
		})
		.when('/threads', {
			templateUrl: '/pages/threads.html',
			controller: 'threadsControl'
		})
		.when('/threads/:threadId', {
			templateUrl: '/pages/thread.html',
			controller: 'threadControl'
		})
		.otherwise({
			redirectTo: '/login'
		})
})