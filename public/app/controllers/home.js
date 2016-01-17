var homeCtr = angular.module('HomeModule', []);

homeCtr.controller('HomeController', ['$scope', 'RestService', function($scope, RestService) {

    $scope.init = function() {
        console.log('HomeController: INIT');

        RestService.query({resource:'people'},function(response){
            console.log(JSON.stringify(response));

            $scope.people = response.people;

        });
    }


}]);