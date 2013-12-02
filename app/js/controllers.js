'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('InterestCtrl', ['$scope', function($scope) {
      $scope.interest = {
        start : 100000.00,
        additional : 17500+11000,
        rate : 7.2,
        per : "Year",
        periods : 30,
        items : []
      };
      $scope.interest.calculate = function() {
        var items = [$scope.interest.start];

        for (var i=0; i < $scope.interest.periods; i++){
          items.push(items[i] * (1+$scope.interest.rate/100) + $scope.interest.additional);
        };

        $scope.interest.items = items;

        console.log(items.length);
      };
  }]);