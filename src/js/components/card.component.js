(function () {
    'use strict';
    angular.module('Test').component('card', {
        templateUrl: 'components/card.component.html',
        controllerAs: 'model',
        transclude: true,
        bindings: {
            title:'@',
            imgSrc: '@',
            imgAlt: '@',
            ctaHref: '@',
            ctaText: '@',
            ctaType: '@'
        }
    });
}());

