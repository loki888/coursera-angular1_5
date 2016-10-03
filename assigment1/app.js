(
function(){
	angular.module('Assigment', [])
		.controller('LunchCheckController', LunchCheckController);
	
	
	
	
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){
		$scope.inputItems = "";
		$scope.message = "";
		$scope.LunchCheck = function(){
			$scope.message = "";
			var arrItems = $scope.inputItems.split(',');
			if( arrItems[0] == ''){
				return $scope.message = 'Please, enter data first';
				console.log('Please, enter data first');
			};
			//var arrTrimItems = [];
			/*for(i=0; i >= arrItems.length; i++){
				var itemStr = arrItems[i].join().trim();

				arrTrimItems.push(arrItems[i]); // непрацює бо ітеми зараз в аррей потрібно перевести в строку
			}
			*/

			console.log(arrItems);
			if (arrItems.length <=  3){
				return $scope.message = 'Enjoy!';
			}
			else if (arrItems.length >  3){
				return $scope.message = 'To much!';
			}
			/*else if (arrItems == ""){
				return $scope.message = 'Please, enter data first';
			} */
			else 
				return  $scope.message = 'Please, enter data first';
		};



	}
	
	
	
})();