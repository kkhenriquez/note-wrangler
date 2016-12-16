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

.filter('noteFilter', function() {
  return function(notesInput, tag) {
    var note, tagMatch;
    var result = [];

    for (var i=0, l = notesInput.length; i < l; i++) {
      note = notesInput[i];

      tagMatch = !tag || note.tags === tag;

      if(tagMatch) {
        result.push(note)
      }
    }

    return result;
  };
})

.directive('nwTagItem', function() {
  return {
    restrict: 'E',
    scope: {
      note: "="
    },
    templateUrl: '/viewNotes/nw-tag-item.html',
    link: function(scope, element, attrs) {
      scope.setTag = function() {
        
      }
    }
  }
})

.controller('ViewNotesController', ['noteService', '$scope',
function(noteService, $scope) {
  noteService.getNotes().then(function(response) {
    $scope.data = response.data;
  }, function(response){
    console.log('Some error ocurred');
  });

  $scope.filters = {};

  $scope.makeActive = function() {
    $scope.filters.tags = $scope.note.tags
  }
}]);
