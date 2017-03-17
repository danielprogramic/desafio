(function(angular) {
    'use strict';
    var myApp = angular.module('MainAppDomRock', ['nya.bootstrap.select']);

    myApp.directive('widowmodal', function() {
        return {
            template: '<div  class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<h5 class="modal-title" id="exampleModalLongTitle">{{sncards[id-1].title}}</h5>' +
                '</div>' +
                '<div class="modal-body">' +
                '...' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                '<button type="button" class="btn btn-primary">Save changes</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
        };
    });

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
        $scope.id = 0;

        for (var prop in typeselect) {
            $scope.witingopts.push(typeselect[prop].witing);
            $scope.monthopts.push(typeselect[prop].month);
            $scope.yearopts.push(typeselect[prop].year);
        }

        $scope.model1 = typeselect[2].witing;
        $scope.model2 = typeselect[2].month;
        $scope.model3 = typeselect[2].year;
        $scope.sncards = cards;

        $scope.clickmodal = function(id) {
            $scope.id = id;
            $('#exampleModalLong').modal();
        };
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