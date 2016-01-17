var modules = [
  'HomeModule',
  'RestServiceModule'

];

var app = angular.module('Demo', modules, function($interpolateProvider) {
    // set custom delimiters for angular templates becasue they conflict with hogan delimiters
    $interpolateProvider.startSymbol('<%'); 
    $interpolateProvider.endSymbol('%>');
});