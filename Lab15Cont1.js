var app = angular.module("MadLib");

app.controller('inputCtrl', function($scope, myService, $location) {

	var word1 = "";
	var word2 = "";
	var word3 = "";
	var word4 = "";
	var word5 = "";
	var word6 = "";
	var word7 = "";

	$scope.getWord = 
		function(wordModel1, wordModel2, wordModel3, wordModel4, wordModel5, wordModel6, wordModel7) {
			word1 += wordModel1;
			word2 += wordModel2;
			word3 += wordModel3;
			word4 += wordModel4;
			word5 += wordModel5;
			word6 += wordModel6;
			word7 += wordModel7;

			console.log(word1, word2, word3, word4, word5, word6, word7);
			myService.saveData(word1, word2, word3, word4, word5, word6, word7);
			$location.path('/View2');
	};
});