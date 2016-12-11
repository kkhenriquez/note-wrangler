'use strict';

angular.module('myApp.viewNotes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notes', {
    templateUrl: 'viewNotes/view.html',
    controller: 'ViewNotesController'
  });
}])

.service('noteService', ['$http', function($http) {
  this.getNotes = function() {
    return $http({
      method: 'GET',
      url: 
    })
  }
}])

.controller('ViewNotesController', [function() {

}]);
