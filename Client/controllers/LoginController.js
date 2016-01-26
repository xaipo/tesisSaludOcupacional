/**
 * Created by xaipo on 9/30/2015.
 */

app.controller('LoginController', ['$scope', '$http', '$location',  function ($scope,$http,$location) {

    $scope.mensaje = "msj";
    $scope.usuario = "";
    $scope.password = "";
    $scope.usuario1;
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
            console.log(response.data[0].nombre_usuario);
            console.log(response.data[0].contrasena);
            $scope.usuario1= angular.fromJson(response.data[0]);
            console.log($scope.usuario1);
            console.log($scope.usuario1.nombre_usuario);
            console.log($scope.usuario1.contrasena);
           // console.log($scope.usuario1);
            if($scope.usuario1.nombre_usuario==$scope.usuario && $scope.usuario1.contrasena==$scope.password ){
                console.log($scope.usuario1.contrasena);
                $scope.mensaje="Bienvenido "+response.data[0].nombre_usuario.toString();


                window.location ='/tesisSaludOcupacional/Client/Administrator/indexAdmin.html';
                //$location.path("/indexAdmin");
               //$location.href("/tesisSaludOcupacional/Client/Administrator/inicio.html");
                $location.replace();
                //console.log($location.path());
               // $location.path('/foo');
                //$location.absUrl() == '/tesisSaludOcupacional/Client/Administrator/inicio.html'

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
