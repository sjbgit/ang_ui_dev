/**
 * Created by sbunke on 1/28/2015.
 */
'use strict';
angular.module('myApp.directives', [])
    .directive('helloWorld', function () {
        return {
            restrict: 'AE',
            scope: { name: "=name" },
            template:
            "<h1>Hello Directive: {{ name.first }} {{ name.last }}!</h1>" +
            "<input data-ng-model='name.first'></input>" +
            "<input data-ng-model='name.last'></input>"
        }
    });