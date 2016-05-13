var app = angular.module("MadLib");

app.controller('outputCtrl', function($scope, myService) {
	console.log("Step Out");
	var dataOnPage = myService.getData();
	$scope.string1 = dataOnPage.string1;
	$scope.string2 = dataOnPage.string2;
	$scope.string3 = dataOnPage.string3;
	$scope.string4 = dataOnPage.string4;
	$scope.string5 = dataOnPage.string5;
	$scope.string6 = dataOnPage.string6;
	$scope.string7 = dataOnPage.string7;
	console.log("Step Out 2");
    console.log(dataOnPage);
});

