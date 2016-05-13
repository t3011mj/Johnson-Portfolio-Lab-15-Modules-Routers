var app = angular.module("MadLib");

app.factory("myService", function() {
	var words1 = "";
	var words2 = "";
	var words3 = "";
	var words4 = "";
	var words5 = "";
	var words6 = "";
	var words7 = "";

	return {
		saveData: function(string1, string2, string3, string4, string5, string6, string7) {
			words1 = string1;
			words2 = string2;
			words3 = string3;
			words4 = string4;
			words5 = string5;
			words6 = string6;
			words7 = string7;
		},	
		
		getData: function() {
			return {
				string1: words1,
				string2: words2,
				string3: words3,
				string4: words4,
				string5: words5,
				string6: words6,
				string7: words7
			
			}
		
		}
	}
});