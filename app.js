var app = angular.module('myApp', []);

app.controller('containerctrl', function($scope, $window, $http, $filter) {
    console.log("IN CONTAINER");

    var vm = this;
    var containerUrl = "http://130.65.159.215:8080/v1/AUTH_d39df57dac474801a5ba856d3c5fbe76/Mycontainer";


    vm.getItem = function(itemname){
        console.log(itemname);
        var itemUrl = "http://130.65.159.215:8080/v1/AUTH_d39df57dac474801a5ba856d3c5fbe76/Mycontainer/" + itemname;
        $http.get(itemUrl)
        .then(function(response){
            vm.data = response.data;
        });
    }

    vm.init = function(){
        $http.get(containerUrl)
        .then(function(response){
            console.log("here");
            console.log(response);
            vm.items = response.data;
        });
    }

    vm.init();
});