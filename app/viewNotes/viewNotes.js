'use strict';

angular.module('myApp.viewNotes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notes', {
    templateUrl: 'viewNotes/view.html',
    controller: 'ViewNotesController'
  });
}])

.controller('ViewNotesController', [function() {

}]);
