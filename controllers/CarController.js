app.controller("CarController",function($scope,$routeParams,$location){
  $scope.id=$routeParams.idcar;
  $scope.name =$routeParams.name;
  $scope.goDetails=function(){
    $location.path("car/2?name=hola");

  };
});
