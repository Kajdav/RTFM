'use strict';

var app = angular.module('rtfmApp');

app.controller('threadsControl', function($scope, threadsRef){
	$scope.threads = threadsRef.$asArray();
	$scope.createThread = function(username, title) {
		$scope.threads.$add({
			username: username,
			title: title
		})
	}
})


	// $scope.threads.$loaded().then(function (threads) {
 //      console.log(threads);
 //    });