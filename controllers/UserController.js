app.controller("UserController",function($scope
    ,$routeParams){

  $scope.id = $routeParams.id;
  $scope.name = $routeParams.name;
  $scope.num = $routeParams.vehiculos;

});
