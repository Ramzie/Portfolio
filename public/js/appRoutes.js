angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider
    .when('/',{
      templateUrl:'views/home.html',
      controller:'homeController'
    })
    .when('/gallery',{
      templateUrl:'views/gallery.html',
      controller:'galleryController'
    })
    .otherwise({
      templateUrl:'views/404.html',
      controller:'404Controller'
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
