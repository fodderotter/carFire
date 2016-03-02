app.controller("carsCtrl", function($scope, $firebaseArray, carsRef) {
	$scope.cars=$firebaseArray(carsRef);
	$scope.addCar = function(carObj){
		$scope.cars.$add(carObj)
			.then(function(ref){

			})
	}
});