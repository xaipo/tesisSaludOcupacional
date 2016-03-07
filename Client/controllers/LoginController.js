/**
 * Created by xaipo on 9/30/2015.
 */

app.controller('LoginController', ['$scope', '$http', '$location','$rootScope',  function ($scope,$http,$rootScope,$location) {

    $scope.mensaje = "";
    $scope.usuario = "";
    $scope.password = "";
    $scope.usuario1;
    $rootScope.usuarioLogin;
    $scope.login = function () {
        $scope.mensaje = "procesando";


        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/usuarios?nombre_usuario='+$scope.usuario,
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
          //  console.log(response.data[0].nombre_usuario);
          //  console.log(response.data);
            $scope.usuario1= angular.fromJson(response.data[0]);
            //console.log($scope.usuario1);
           // console.log($scope.usuario1.nombre_usuario);
           // console.log($scope.usuario1.contrasena);
           // console.log($scope.usuario1);
            if(response.data.length>0){
            if($scope.usuario1.nombre_usuario==$scope.usuario && $scope.usuario1.contrasena==$scope.password ){
                console.log($scope.usuario1.contrasena);
                $scope.mensaje="Bienvenido "+response.data[0].nombre_usuario.toString();
                $rootScope.usuarioLogin=$scope.usuario1;

                window.location ='/tesisSaludOcupacional/Client/Administrator/indexAdmin.html';

             //   $location.replace();


            }else{

                $scope.mensaje="Revise su usuario y password";
            }

            }else{

                $scope.mensaje="Revise su usuario y password";

            }
            console.log(response);

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            Console.log(response);
            $scope.mesaje=response.mensaje;

        });
    };



}]);
