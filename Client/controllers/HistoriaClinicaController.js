/**
 * Created by xaipo on 1/29/2016.
 */



app.controller('HistoriaClinicaController', ['$scope', '$http', '$location','myProvider','$localStorage',  function ($scope,$http,$location,myProvider,$localStorage) {

    $scope.mensaje = "";
    $scope.PacienteEncontrado="";
    $scope.pacienteBusqueda="";


    //realizar el control si tiene una historia clinica vigente







    // <editor-fold defaultstate="collapsed" desc="Busqueda Paciente">
    $scope.searchPaciente=function(){
        $scope.mensaje = "procesando";
        if($scope.pacienteBusqueda!="") {
              console.log(myProvider.getPaciente()+"?cedula="+$scope.pacienteBusqueda);
                $http({
                    method: 'GET',
                    url: myProvider.getPaciente()+"?cedula="+$scope.pacienteBusqueda,

                    headers: {
                        'Content-Type': 'application/json'
                    }

                }).then(function successCallback(response) {
                    console.log('url');

                   var n = response.data.length;
                  //  console.log(n);

                    if(n==0){

                            alert('no se encontro el paciente');
                            $scope.pacienteBusqueda="";
                            $scope.pacienteEncontrado="";
                    }else {
                        var aux = response.data[0];
                       // console.log(aux);
                        $scope.pacienteEncontrado = (aux);



                        // <editor-fold defaultstate="collapsed" desc="Obtener descripciones Puesto Trabajo">
                        $http({
                            method: 'GET',
                            url: myProvider.getPuestoTrabajo()+"?_id="+$scope.pacienteEncontrado.puesto_trabajo+"&&estado=1",

                            headers: {
                                'Content-Type': 'application/json'
                            }

                        }).then(function successCallback(response) {
                            console.log('url');

                            var n = response.data.length;
                            // console.log(n);

                            if(n==0){

                                alert('no se encontro el paciente');

                            }else {
                                $scope.pacienteEncontrado.puesto_trabajo = response.data[0];
                             //   console.log($scope.pacienteEncontrado.puesto_trabajo);


                            }


                        }, function errorCallback(response) {

                            //  Console.log(response);
                            $scope.mesaje = response.mensaje;

                        });




                        // </editor-fold>

                        console.log($scope.pacienteEncontrado);
                    }


                }, function errorCallback(response) {

                    //  Console.log(response);
                    $scope.mesaje = response.mensaje;

                });


        }else{
            $scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";


        }

    };

// </editor-fold >




    /*
// <editor-fold defaultstate="collapsed" desc="Inicializar">

    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/empresa',
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        // console.log(response);
        var n=response.data.length;
        //   console.log(response.data.length);
        for(var i=0; i<n; i++){
            var aux=response.data[i];
            // console.log(aux);
            $scope.listaEmpresas.push(aux);

            // console.log($scope.listaEmpresas);

        }


    }, function errorCallback(response) {

        Console.log(response);
        $scope.mesaje=response.mensaje;

    });
// </editor-fold >

    */

/*
    $scope.test = function () {
        $scope.mensaje = "procesando";

        console.log('entro');
        $scope.empresaSelected=JSON.parse($scope.empresaSelected);
        console.log($scope.empresaSelected.nombre_empresa);

    };




    $scope.searchDependenciaPorEmpresa = function () {

        $scope.mensaje = "procesando";

        if($scope.empresaSelected.length>0) {
            $scope.listaDependencias=[];
            console.log($scope.empresaSelected);
            var contact = JSON.parse($scope.empresaSelected);

            console.log(contact);
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/dependencia?id_empresa=' + contact._id,
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(function successCallback(response) {

                $scope.depenendica = angular.fromJson(response.data[0]);


                console.log(response);
                var n = response.data.length;
                console.log(response.data.length);
                for (var i = 0; i < n; i++) {
                    var aux = response.data[i];
                    console.log(aux);
                    $scope.listaDependencias.push(aux);

                    console.log($scope.listaDependencias);

                }

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                Console.log(response);
                $scope.mesaje = response.mensaje;

            });
        }else{

            $scope.mensaje="Seleccione una Empresa para cargar las dependencias";
        }
    };
*/


}]);