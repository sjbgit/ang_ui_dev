/**
 * Created by sbunke on 1/28/2015.
 */
'use strict';
angular.module('myApp.controllers', []).
    controller('helloWorldCtrl', function ($scope) {
        $scope.name = { first: "Jane", last: "Doe" };
    });