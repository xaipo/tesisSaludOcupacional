/**
 * Created by xaipo on 9/30/2015.
 */

app.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

    $scope.mensaje = "msj";
    $scope.usuario = "";
    $scope.password = "";
    $scope.usuario1;
    $scope.login = function () {
        $scope.mensaje = "procesando";
        console.log("funciona");
        console.log($scope.usuario);
        console.log($scope.password);
        console.log("hola");
        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/usuarios?nombre_usuario='+$scope.usuario,
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response.data[0].nombre_usuario.toString());
            console.log(response.data[0].contrasena.toString());
            $scope.usuario1= angular.fromJson(response);
            console.log($scope.usuario1);
            console.log($scope.usuario1);
            if($scope.usuario1.nombre_usuario==$scope.nombre /*&& $scope.usuario1.contrasena==$scope.password*/ ){

                $scope.mensaje="Bienvenido "+response.data[0].nombre_usuario.toString();


            }else{

                $scope.mensaje="Revise su usuario y password";
            }
            console.log(response);

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };



}]);
