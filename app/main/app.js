var app = angular.module('rtfm', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'app/templates/login/login-view.html',
			controller: 'loginCtrl'
		})
		.when('/threads', {
			templateUrl: 'app/templates/threads/threads-view.html',
			controller: 'threadsCtrl'
		})
		.when('/threads/:threadId', {
			templateUrl: 'app/templates/single-thread/single-thread-view.html',
			controller: 'singleThreadCtrl'
		})
		.otherwise({
			redirectTo: '/login'
		})
});