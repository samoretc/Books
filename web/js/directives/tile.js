(function(angular){
  'use strict';

  angular.module('weatherpic')
    .directive('tile', tile);


     function tile() {
        return {
            restrict: 'E',
            templateUrl: 'static/templates/tile.html',
            controller: 'TileController',
            controllerAs: 'tileVM', //view model
            bindToController: {
                myProp: '='
            },
            scope: {}
        };
    }


}(angular));