'use strict';

/* Controllers */

angular.module('myApp', []).
  controller('tipCtrl', ['$scope', function($scope) {
    $scope.total=20;
    $scope.tip=15;
    $scope.people=3;
    $scope.result = function(){
      if($scope.people == 0) return 0;
      
      var pennies = 100*$scope.total*(1 + $scope.tip/100.0);
      return Math.ceil(pennies / $scope.people)/100;
    }
  }]);

