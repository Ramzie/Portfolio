angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider
    .when('/',{
      templateUrl:'views/resume.html',
      controller:'resumeController'
    })
    .when('/gallery',{
      templateUrl:'views/gallery.html',
      controller:'galleryController'
    })
    .when('/twitter',{
      templateUrl:'views/twitter.html',
      controller:'twitterController'
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
