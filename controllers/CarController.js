app.controller("CarController",function($scope,$routeParams){
  $scope.id=$routeParams.id;
  $scope.name =$routeParams.name;
  $scope.goDetails=function(){
    alert("Detalles");
  };
});
