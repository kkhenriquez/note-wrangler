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
      url: 'components/notes/notes.json'
    });
  };
}])

.controller('ViewNotesController', ['noteService', '$scope',
function(noteService, $scope) {
  noteService.getNotes().then(function(response) {
    $scope.data = response.data;
  }, function(response){
    console.log('Some error ocurred');
  });
}]);
