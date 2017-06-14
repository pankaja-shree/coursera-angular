'use strict';

angular.module('confusionApp')
    .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    
                this.getDishes = function(){
                    //get dishes from server
                    return $resource(baseURL+"dishes/:id", null, {'update': {method: 'PUT'}});
                };
    
                /* 
                Not required for $resource module
                this.getDish = function (index) {
                    return $http.get(baseURL+"dishes/" + index);
                };
                
    
                this.getPromotion = function(index) {
                    return promotions[index];
                };
                */

                 this.getFeatured = function() {
                    return $resource(baseURL+"dishes/0");
                };
                // implement a function named getPromotion
                // that returns a selected promotion from server.
                this.getPromotion = function(index) {
                    return $resource(baseURL+'promotions/0');
                };
                        
        }])

        .factory('corporateFactory', function() {
    
            var corpfac = {};
    
           
            // Implement a function named getLeaders,
            // to get leaders array from server
            
            corpfac.getLeaders = function(){
                return $resource(baseURL+'leadership/:id', null, {'update': {method: 'PUT'}});
            };
    
            return corpfac;
    
        })

;