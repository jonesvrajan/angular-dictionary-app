'use strict';

/**
 * @ngdoc function
 * @name angularDictionaryApp.controller:searchListController
 * @description
 * # searchListController
 * Controller of the angularDictionaryApp
 */
angular.module('angularDictionaryApp')
  .factory('dictionaryFactory', function($http) {
  
        var termUrl = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=';
        
        return {
           getTerms: function(inputValue){
              return $http({
                  url: termUrl + inputValue,
                  headers: { 'X-Mashape-Authorization': 'JOMmT4qmL1mshSlcn9bMWZD3X2THp1UgQMTjsnnNSRUmAB9pMi' },
                  method: 'GET'
              }).success(function(data){
                  return data;
              });
           }  
        }
     })

  .controller('SearchListController', function($scope,dictionaryFactory) {
    $scope.getDefinitions = function() {
        var searchTerm = $scope.searchTerm
        dictionaryFactory.getTerms(searchTerm).success(function(data){
          $scope.term=data;
          //console.log($scope.term);
          $scope.displayResults = true;
      });
    }
  
})
