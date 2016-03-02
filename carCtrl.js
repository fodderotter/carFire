app.controller("carCtrl", function($scope, carsService, carRef, commentsRef, $firebaseArray, $firebaseObject) {
	$scope.car = $firebaseArray(carRef)
	$scope.comments = $firebaseArray(commentsRef);
})