var app = angular.module("app",['ngRoute'])
  .config(function($routeProvider,$locationProvider){

    $routeProvider.when(
      '/user/:id',
      {
        controller:'UserController',
        templateUrl:'views/user.html'
      }
    ).when(
      '/user/:id/car/:idcar',
      {
        controller:'CarController',
        templateUrl:'views/car.html'
      }
    ).when(
      '/car/:idcar',
      {
        controller:'CarController',
        templateUrl:'views/detail.html'

      });
    $locationProvider.html5Mode(true);

});
