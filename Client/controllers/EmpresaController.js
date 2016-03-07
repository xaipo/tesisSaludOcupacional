/**
 * Created by xaipo on 11/21/2015.
 */


app.controller('EmpresaController', ['$scope', '$http', function ($scope, $http) {
    $scope.mensaje = "";
    $scope.listaEmpresas=[];
    $scope.empresaSelected="";



        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/empresa',
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
            n=response.data.length;
            console.log(response.data.length);
            for(var i=0; i<n; i++){
                var aux=response.data[i];
                console.log(aux);
                $scope.listaEmpresas.push(aux);
                //console.log(response.data[i]);
                console.log($scope.listaEmpresas);

            }
           /* console.log(response.data[0].nombre_usuario);
            console.log(response.data);
            $scope.usuario1= angular.fromJson(response.data[0]);
            console.log($scope.usuario1);
            console.log($scope.usuario1.nombre_usuario);
            console.log($scope.usuario1.contrasena);
            // console.log($scope.usuario1);
            if($scope.usuario1.nombre_usuario==$scope.usuario && $scope.usuario1.contrasena==$scope.password ){
                console.log($scope.usuario1.contrasena);
                $scope.mensaje="Bienvenido "+response.data[0].nombre_usuario.toString();


                window.location ='/tesisSaludOcupacional/Client/Administrator/indexAdmin.html';

                //   $location.replace();


            }else{

                $scope.mensaje="Revise su usuario y password";
            }
            console.log(response);*/

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            Console.log(response);
            $scope.mesaje=response.mensaje;

        });


    $scope.test = function () {
        $scope.mensaje = "procesando";

        console.log('entro');
        $scope.empresaSelected=JSON.parse($scope.empresaSelected);
        console.log($scope.empresaSelected.nombre_empresa);

    };

}]);