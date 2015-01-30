var app = angular.module('rtfm', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'app/templates/login/login-view.html',
			controller: 'loginCtrl'
		})
		.when('/threads', {
			templateUrl: 'app/templates/threads/threads-view.html',
			controller: 'threadsCtrl',
			resolve: {
				threadsThing: function(threadService){
					return threadService.getThreads();
				}
			}
		})
		.when('/thread/:threadId', {
			templateUrl: 'app/templates/single-thread/single-thread-view.html',
			controller: 'singleThreadCtrl',
			resolve: {
				threadRef: function(threadService, $route){
					return threadService.getThread($route.current.params.threadId);
				},
				commentsRef: function(threadService, $route){
					return threadService.getComments($route.current.params.threadId);
				}
			}
		})
		.otherwise({
			redirectTo: '/login'
		})
}).run(function($rootScope, $location, environmentService){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
		if(environmentService.getUsername()){
			$rootScope.user = environmentService.getUsername();
		} else {
			$location.path('/login');
		}
	})
});