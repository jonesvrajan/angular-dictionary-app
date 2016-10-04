'use strict';

/**
 * @ngdoc overview
 * @name angularDictionaryApp
 * @description
 * # angularDictionaryApp
 *
 * Main module of the application.
 */
angular
  .module('angularDictionaryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
