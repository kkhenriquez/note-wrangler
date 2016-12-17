'use strict';

//Functionality not yet implemented. Only focused on front end.

angular.module('myApp.createNotes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {
    templateUrl: 'createNotes/view.html',
    controller: 'CreateNoteController'
  });
}])

.controller('CreateNoteController', ['noteService', '$scope',
function(noteService, $scope) {
  $scope.update = function(text,tags) {
    var noteObj;
    noteObj = {
      'text': text,
      'tags': tags
    };
    noteService.createNote(noteObj).then(function() {
      alert("success");
    }, function(response) {
      console.log(response.data.error);
    });
  };
}]);
