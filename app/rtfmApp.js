var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: '/pages/login/login.html',
			controller: 'loginControl'
		})
		.when('/threads', {
			templateUrl: '/pages/threads/threads.html',
			controller: 'threadsControl',
			resolve: {
				threadsRef: function(threadsService) {
					return threadsService.getThreads();
				}
			}
		})
		.when('/thread/:threadId', {
			templateUrl: '/pages/thread/thread.html',
			controller: 'threadControl',
			resolve: {
				threadRef: function(threadsService, $route) {
					return threadsService.getThread($route.current.params.threadId);
				},
				commentsRef: function(threadsService, $route) {
					return threadsService.getComments($route.current.params.threadId);
				}
			}
		})
		.otherwise({
			redirectTo: '/login'
		})
})

app.run(function($rootScope,  $route, $location, $routeParams, EnvironmentService){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
		if (EnvironmentService.getUserName()) {
			$rootScope.username = EnvironmentService.getUserName();
		}
		else {
			$location.path('/login');
		}
	})
})