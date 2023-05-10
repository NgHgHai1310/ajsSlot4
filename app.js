//create angular app
var validationApp = angular.module('validationApp',[]);

//Create angular controller
validationApp.controller('mainController',function ($scope){
    $scope.sumitForm = function (isValid){
        if(isValid){
            alert('form is Valid');
        }
    };
});