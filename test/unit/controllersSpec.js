'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));


  it('should have the right starting values', inject(function($controller) {
    var scope={},
        ctrl = $controller('InterestCtrl', {$scope:scope});

    expect(scope.interest.start).toBe(100000);
    expect(scope.interest.rate).toBe(7.2);
    expect(scope.interest.per).toBe('year');
    expect(scope.interest.periods).toBe(30);
    expect(scope.interest.items.length).toBe(0);
  }));

  it('should have more items when we calculate', inject(function($controller) {
    var scope={},
        ctrl = $controller('InterestCtrl', {$scope:scope});

    expect(scope.interest.items.length).toBe(0);
    scope.interest.calculate();
    expect(scope.interest.items.length).toBe(31);

    scope.interest.periods = 10;
    scope.interest.calculate();
    expect(scope.interest.items.length).toBe(11);
  }));

});
