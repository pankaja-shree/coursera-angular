'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

            $scope.showMenu = false;
            $scope.message = "Loading ...";

            //using $resource module, $scope.dishes will be empty untill the data is fetched from server. No need of using promises. 
            ///query() takes 2 function args - success and failure
           menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });
            
            /*
            $http module
            //use promise to fetch the dish object from server
            menuFactory.getDishes()
            .then(
                function(response){
                    $scope.dishes = response.data;
                },
                function(error){
                     $scope.message = "Error: "+error.status + " " + error.statusText;
                }
                );
                */

                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', 'feedbackService', function($scope, feedbackService) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                     console.log($scope.feedback);
                    feedbackService.getFeedback().save($scope.feedback);
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                   
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

            $scope.showDish = false;
            $scope.message="Loading ...";
            
            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
            .$promise.then(
                            function(response){
                                $scope.dish = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
            );

            /*
            $http module:
            menuFactory.getDish(parseInt($stateParams.id,10))
            .then(
                function(response){
                    $scope.dish = response.data;
                    $scope.showDish = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
                );
                */
            
            
            
        }])

        .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
              $scope.submitComment = function () {
                                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                                $scope.dish.comments.push($scope.mycomment);

                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                                $scope.commentForm.$setPristine();
                                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            };
        }])

        // implement the IndexController and About Controller here
        .controller('IndexController',['$scope', 'menuFactory', 'corporateFactory',  function($scope, menuFactory, corporateFactory) {
            
            //$scope.promotion = menuFactory.getPromotion(0);
            $scope.showPromo = false;
            $scope.Promomessage = "Loading ...";

            menuFactory.getPromotion().get()
            .$promise.then(
                function(response){
                    $scope.promotion = response;
                    $scope.showPromo = true;
                },
                function(err){
                    $scope.Promomessage = 'Error' + err.status + ' ' + err.statusText;
                }
            );

            $scope.showDish = false;
            $scope.message="Loading ...";

            $scope.dish = menuFactory.getDishes().get({id:0})
                        .$promise.then(
                            function(response){
                                $scope.dish = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        );
            
            
            /*
            Used in the case of $http
            menuFactory.getDish(0)
            .then(
                function(response){
                    $scope.dish = response.data;
                    $scope.showDish = true;
                },
                function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                            );
                            */
            
            $scope.executive = corporateFactory.getLeaders().get({id:3});
        }])

        .controller('AboutController',['$scope','$stateParams', 'corporateFactory', function($scope, $stateParams, corporateFactory){
            $scope.message = 'Loading...';
            $scope.showLeaders = false;

            corporateFactory.getLeaders().query(
                function(response){
                    $scope.leaders = response;
                    $scope.showLeaders = true;
                },
                function(err){
                    $scope.message = 'Error' + err.status + ' ' + err.statusText;
                }
            );
        }])

;