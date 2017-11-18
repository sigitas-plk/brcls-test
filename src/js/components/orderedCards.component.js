(function () {
    'use strict';

     function controller(getCards){
        var model = this;
        model.isArray = function (val) {
            return val instanceof Array;
        };

        model.$onInit = function(){
            getCards.then(function(cards){
                model.cards = cards;
            });
        };
    }

    angular.module('Test').component('orderedCards', {
        templateUrl: 'components/orderedCards.component.html',
        controllerAs: 'model',
        controller: ['getCards',controller]

    });

}());