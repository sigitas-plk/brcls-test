(function () {
'use strict';
    var module = angular.module('Test', ['ngRoute',]);

    module.config(function($routeProvider){
        $routeProvider.when('/home',{template: '<ordered-cards></ordered-cards>'})
            .when('/product', {template:'<temp-product></temp-product>'})
            .when('/atm', {template:'<temp-atm></temp-atm>'})
            .when('/branch', {template:'<temp-branch></temp-branch>'})
            .otherwise({redirectTo:'/home'});
    });

})();
