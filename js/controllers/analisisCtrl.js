app.controller('analisisCtrl',['$scope','$http',function($scope,$http){
    $scope.activarPestana("mAnalisis");
    $scope.talleres = {};
    $scope.cargando = true;

    setTimeout(function(){
        $http({
            method: 'GET',
            url: 'json/talleres.json'
          }).then(function successCallback(respuesta) {
            $scope.talleres = respuesta.data;
            $scope.cargando = false;
          });
    },2000);
}]);