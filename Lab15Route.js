var app = angular.module("MadLib", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'output.html',
		controller: 'inputCtrl'
	})
	.when('/View2',{
		templateUrl: 'output.html',
		controller: 'outputCtrl'
	});
});

});

