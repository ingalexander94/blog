var app = angular.module('BlogApp',['ngRoute']);

app.controller('blogCtrl',['$scope','$http',function($scope,$http){
    $scope.navbar = "html/partials/navbar.html";
    $scope.footer = "html/partials/footer.html";
    $scope.configuracion = {};

    $scope.activarPestana = function(pestana){
        $scope.mInicio = "";
        $scope.mAnalisis = "";
        $scope.mContacto = "";
        $scope[pestana] = "active";
    } 

    $http({
        method: 'GET',
        url: 'json/configuracion.json'
      }).then(function successCallback(respuesta) {
        $scope.configuracion = respuesta.data;
      });
    
}]);