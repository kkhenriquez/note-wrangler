angular.module('myApp.viewNotes')

.directive('nwCard', function() {
  return {
    restrict: "E",
    templateUrl: 'viewNotes/templates/nw-card.html',
    controller: function ($scope) {
      $scope.tweet = function(text) {
        console.log('clicked');
        var url = "https://twitter.com/intent/tweet?&text=";
        window.open(url+encodeURIComponent(text));
      };
    }
  }
});
