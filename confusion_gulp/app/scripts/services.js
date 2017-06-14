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
                    return $resource(baseURL+'promotions[0]');
                };
                        
        }])

        .factory('corporateFactory', function() {
    
            var corpfac = {};
    
           
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
    
            corpfac.getLeaders = function(){
                return leadership;
            };  
            
            corpfac.getLeader = function(index){
                return leadership[index];
            };
    
            return corpfac;
    
        })

;