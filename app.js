(function () {
	'use strict';
	angular.module('myFirstApp', [])
		.controller('myFirstController', function($scope){
		$scope.name = "Sergiy";
		$scope.sayHello = function () {
			return "Hello Ukraine!!!"
		};
	});
	
})();