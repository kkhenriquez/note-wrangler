'use strict';

describe('myApp.viewNotes module', function() {

  beforeEach(module('myApp.viewNotes'));

  describe('viewNotes controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var viewNotesCtrl = $controller('ViewNotesController', { $scope: $scope });
      expect(viewNotesCtrl).toBeDefined();
    }));

  });
});
