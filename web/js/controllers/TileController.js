(function(angular) {
  'use strict';

  angular.module('weatherpic')
    .controller('TileController', TileController);

  // @ngInject
  function TileController() {
    var vm = this;
    console.log(vm.myProp);
  }



})(angular);