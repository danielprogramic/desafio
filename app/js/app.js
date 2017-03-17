(function(angular) {
    'use strict';
    var myApp = angular.module('MainAppDomRock', ['nya.bootstrap.select']);

    myApp.factory('optFactory', function($http) {
        var factory = [];
        factory.getTodos = function() {
            return $http.get("js/config.js");
        }
        return factory;
    });

    myApp.controller('MainController', ['$scope', 'optFactory', function($scope, optFactory) {
        $scope.witingopts = [];
        $scope.monthopts = [];
        $scope.yearopts = [];

        for (var prop in typeselect) {
            $scope.witingopts.push(typeselect[prop].witing);
            $scope.monthopts.push(typeselect[prop].month);
            $scope.yearopts.push(typeselect[prop].year);
        }

        $scope.model1 = typeselect[2].witing;
        $scope.model2 = typeselect[2].month;
        $scope.model3 = typeselect[2].year;
        $scope.sncards = cards;

        $scope.clickmodal = function(taskId) {
            alert("Task Id is " + taskId);
        };
       $('#yourElement').fadeIn(700);
        // optFactory.getTodos().then(function(value) {

        //     for (var prop in value.data.typeselect) {
        //         $scope.witingopts.push(value.data.typeselect[prop].witing);
        //         $scope.monthopts.push(value.data.typeselect[prop].month);
        //         $scope.yearopts.push(value.data.typeselect[prop].year);
        //     }

        //     $scope.model1 = value.data.typeselect[2].witing;
        //     $scope.model2 = value.data.typeselect[2].month;
        //     $scope.model3 = value.data.typeselect[2].year;

        // }).finally(function() {
        //     console.log("Finish");
        // });

    }]);


})(window.angular);