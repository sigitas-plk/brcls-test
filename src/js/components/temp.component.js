(function () {
    'use strict';

    var module = angular.module('Test');

    module.component('tempProduct', {
        template: '<h4>Product Details component goes here..</h4>'

    });

    module.component('tempAtm', {
        template: '<h4>Find nearest ATM awesome component goes here..</h4>'
    });

    module.component('tempBranch', {
        template: '<h4>Branch details component goes here..</h4>'
    });

}());