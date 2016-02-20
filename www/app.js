angular.module('starter', [
  'ionic',
  'ngResource',
  'ui.router'  
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'routes/app/app.html',
      controller: 'AppCtrl'
    })
    .state('app.home', {
      url: '^/home',
      views: {
        'menuContent': {
          templateUrl: 'routes/home/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'vm'
        }
      }
    });

  $urlRouterProvider.otherwise('/home');
})
.constant('apiUrl', 'https://sustainable-seafood-api.herokuapp.com');
