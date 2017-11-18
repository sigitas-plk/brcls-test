(function () {
    'use strict';

     angular.module('Test').factory('getCards', function($http){
         console.log('loaded factroy');
         return $http.get('data/cardData.json')
             .then(function(response){
                 return response.data;
             }, function(err){
                 console.log(err);
             });
     });

}());