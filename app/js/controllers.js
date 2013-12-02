'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('InterestCtrl', ['$scope', function($scope) {
      $scope.interest = {
        start : 100000.00,
        additional : 17500+11000,
        rate : 7.2,
        per : "Year",
        foopy: 'foo',
        periods : 30,
        items : [],
        intervalRate : function(x) {
          return (x.per === "Month") ? x.rate/12 : x.rate;
        }
      };
/*
      $scope.interest.calculate = function() {
        var items = [$scope.interest.start];

        for (var i=0; i < $scope.interest.periods; i++){
          items.push(items[i] * (1+$scope.interest.intervalRate($scope.interest)/100) + $scope.interest.additional);
        };

        $scope.interest.items = items;

        console.log(items.length);
      };
*/
      $scope.interest.calcItems= function(start, periods, intRate, additional) {
        var items = [start];

        for (var i=0; i < periods; i++){
          items.push(items[i] * (1+intRate/100) + additional);
        };

        console.log(items.length);
        return items;
      }
  }]);