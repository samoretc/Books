(function(angular){
    'use strict';

    angular.module('weatherpic')
        .service('picservice', picservice);

    function picservice($http){
      var URL = 'http://localhost:3000/'
        this.get = function(){
          return $http.get(URL).then(function(response){
              // debugger;
              return response.data;
          });
        }
        this.post = function(pic, url){

          return $http.post(URL + 'addWeatherPic', {'pic': pic, 'url': url}).then(function(response){
              return response;
          });
        }
    }

}(angular));