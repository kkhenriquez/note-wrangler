'use strict';

angular.module('myApp.createNotes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {
    templateUrl: 'createNotes/view.html',
    controller: 'CreateNoteController'
  });
}])

.controller('CreateNoteController', [function() {

}]);
