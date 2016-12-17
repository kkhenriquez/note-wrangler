angular.module('myApp.viewNotes')

.directive('nwCard', function() {
  return {
    restrict: "E",
    templateUrl: 'viewNotes/templates/nw-card.html',
    scope: {
      body: "=",
      tag: "="
    }
  }
});
