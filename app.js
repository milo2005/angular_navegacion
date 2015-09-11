var app = angular.module("app",['ngRoute'])
  .config(function($routeProvider){

    $routeProvider.when(
      '/user/:id',
      {
        controller:'UserController',
        templateUrl:'views/user.html'
      }
    );

});
