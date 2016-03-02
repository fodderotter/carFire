var app = angular.module("carFire", ["ui.router", "firebase"]);
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/cars")
	$stateProvider
	.state("cars", {
		url: "/cars",
		templateUrl:"templates/car.html",
		controller:"carsCtrl",
		resolve: {
			carsRef: function(carsService) {
				return carsService.getCars();
			}
		}
	})
	.state("car", {
		url: "/cars/:carId",
		templateUrl:"templates/car.html",
		controller:"carCtrl",
		resolve: {
			carRef: function(carsService, $stateParams) {
				return carsService.getCar($stateParams.carId);
			},
			commentsRef: function(carsService, $stateParams) {
				return carsService.getComments($stateParams.carId);
			}
		}
	});
})