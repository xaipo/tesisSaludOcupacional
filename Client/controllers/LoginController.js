/**
 * Created by xaipo on 9/30/2015.
 */



app.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

    $scope.mensaje = "msj";
    $scope.usuario = "";
    $scope.password = "";

    $scope.login = function () {
        $scope.mensaje = "procesando";
        console.log("funciona");
        console.log($scope.usuario);
        console.log($scope.password);
        /*$http.get('http://localhost:26077/api/SincronizarBases').
            success(function (data, status, headers, config) {
                if (data == "ok") {
         $scope.mensaje = "Sincronizadas correctamente";
         } else {
                    $scope.mensaje = "Error el servidor por seguridad bloquea peticiones seguidas intente más tarde";
                }
            }).
            error(function (data, status, headers, config) {
                $scope.mensaje = "no conecta al servidor";
            });*/

    };



}]);
