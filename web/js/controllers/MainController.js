(function(angular) {
  'use strict';

  angular.module('weatherpic')
    .controller('MainController', MainController);

  // @ngInject
  function MainController(picservice) {
      var vm = this;
      load();
      vm.hello = 'HelloWorld';
      vm.postPic = function(pic, url){
          var res = picservice.post(pic, url);
          load();
      };

      function load(){
        picservice.get().then(function(response){
        vm.wps = response;
      });
      }
  }


})(angular);