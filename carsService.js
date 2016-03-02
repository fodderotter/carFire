app.service("carsService", function($firebase) {
	var url="https://carscarscars.firebaseio.com/"
	this.getCars=function(){
		var carsRef = new Firebase(url) + "cars/";
		return carsRef;
	};
	this.getCar=function(carId){
		var carRef = new Firebase(url + "cars/" + carId);
		return carRef;
	};
	this.getComments=function(carId){
		var commentsRef = new Firebase(url + "cars/" + carId + "/comments");
		return commentsRef;
	};
})