(function (){
    'use strict';
    var app = angular.module('beerSearch', []);
    
    app.controller('beerSearchController', ['$scope', beerSearchController]);
    
    function beerSearchController($scope) {
        $scope.searchForBeer = function(){
            console.log($scope.beerSearchTerms);
        };
    }
})();