'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('InterestCtrl', ['$scope', function($scope) {
      $scope.interest = {
        start : 100000.00,
        rate : 7.2,
        per : "year",
        periods : 30,
        items : []
      };
      $scope.interest.calculate = function() {
        var items = [$scope.interest.start];

        for (var i=0; i < $scope.interest.periods; i++){
          items.push(items[i] * (1+$scope.interest.rate/100));
        };

        $scope.interest.items = items;
      };
  }]);