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

        var name = '';
    var last_name = '';
    var color = '';

    function setData(n, ln, c) {
      console.log(n, ln, c);
        name = n;
        last_name = ln;
        color = c;
    }


        var searchTerm = 'India'

        var termUrl = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term='+searchTerm+'';
        
        function setTerm(t) {
          console.log(t);
            searchTerm = t;
        }

        return {
          getTerm: function() {
            return {
              searchTerm: searchTerm
            }
          },
          setTerm: setTerm, 
           getTerms: function(){
              return $http({
                  url: termUrl,
                  headers: { 'X-Mashape-Authorization': 'JOMmT4qmL1mshSlcn9bMWZD3X2THp1UgQMTjsnnNSRUmAB9pMi' },
                  method: 'GET'
              }).success(function(data){
                  return data;
              });
           },  
           getData: function() {
            return {
              name: name,
              last_name: last_name,
              color: color
            }
            },
            setData: setData    
        }
     })

  .controller('SearchListController', function($scope,dictionaryFactory) {

  $scope.updateTerm = function() {
    dictionaryFactory.setTerm($scope.searchTerm);
  }
  $scope.getDefinitions = function() {
      $scope.factoryData = dictionaryFactory.getTerm();
      var searchTerm = $scope.searchTerm
      dictionaryFactory.getTerms().success(function(data){
      $scope.term=data;
      console.log($scope.term)
    });
  }

      $scope.updateFactory = function() {
        dictionaryFactory.setData($scope.name, $scope.last_name, $scope.color);
    }
    
    $scope.getFactoryData = function() {
      $scope.factoryData = dictionaryFactory.getData();
      $scope.factoryData.fetchTime = new Date().toString();
        
    }
  
})
