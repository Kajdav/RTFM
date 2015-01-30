angular.module('rtfm', ['ngRoute', 'firebase'])
	.config(function($routeProvider){
		$routeProvider
			.when('/login', {
				templateUrl: 'app/views/login/login-view.html',
				controller: 'loginCtrl'
			})
			.when('/threads', {
				templateUrl: 'app/views/threads/threads-view.html',
				controller: 'threadsCtrl',
				resolve: {
					threadsRef: function(threadService){
						return threadService.getThreads();
					}
				}
			})
			.when('/thread/:id', {
				templateUrl: 'app/views/thread/thread-view.html',
				controller: 'threadCtrl',
				resolve: {
					threadRef: function(threadService, $route){
						return threadService.getThread($route.current.params.id);
					},
					commentsRef: function(threadService, $route){
						return threadService.getComments($route.current.params.id);
					}
				}
			})
			.otherwise({
				redirectTo: '/login'
			})
	}).run(function($rootScope, $location, environmentService){
		$rootScope.$on('$routeChangeStart', function(event, next, current){
			if(!environmentService.getUsername()){
				$location.path('/login')
			} else {
				$rootScope.username = environmentService.getUsername();
			}

		})
	})