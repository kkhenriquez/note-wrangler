angular.module('myApp.viewNotes')

.directive('nwTagItem', function() {
  return {
    restrict: 'E',
    templateUrl: '/viewNotes/templates/nw-tag-item.html',
    link: function(scope, element, attrs) {
      scope.setTag = function() {
        scope.tag = note.tags;
      }
    }
  }
});
