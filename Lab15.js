var app = angular.module("MadLib", ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'Input.html',
		controller: 'inputCtrl'
	});

	$routeProvider.when('/View2', {
		templateUrl: 'Output.html',
		controller: 'outputCtrl'
	});

});
