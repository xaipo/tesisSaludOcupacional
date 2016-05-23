/**
 * Created by xaipo on 5/12/2016.
 */
app.controller('PacienteController', ['$scope', '$http', '$location','myProvider','$localStorage',  function ($scope,$http,$location,myProvider,$localStorage) {


    $scope.paciente={
        ci:"",
        primer_nombre:"",
        segundo_nombre:"",
        primer_apellido:"",
        segundo_apellido:"",
        sexo:"",
        fecha_nacimiento:"",
        ciudad:"",
        provincia:"",
        edad:"",
        telefono:"",
        estado_civil:"",
        nivel_estudios:"",
        puesto_trabajo:""


    };


    $scope.puestoTrabajo={

        nombre_puesto:"",
        dependencia:"",
        cargo:"",
        fecha:"",
        estado:"",
        jornada:"",
        descripcion_funciones:"",
        maquinaria:[],
        herramientas:[],
        materiaPrima:[],
        proteccion:[],
        protocolos:[]

    }

    $scope.nivel_estudio=[];
    $scope.estado_civil=[];
    $scope.ciudades=[];
    $scope.provincias=[];
    $scope.dependencia=[];
    $scope.provinciaSeleccionada="";
    $scope.empresas=[];
    $scope.dependencia=[];
    $scope.empresaSeleccionada="";
    $scope.cargo;
    $scope.jornada;
    $scope.maquinaria;
    $scope.herramientas;
    $scope.proteccion;
    $scope.protocolos;





    $http({

        method: 'GET',
        url: myProvider.getProvincia(),

        headers: {
            'Content-Type': 'application/json'
        }

    }).then(function successCallback(response) {
        //console.log('entra url');
        //console.log(url);

        var n = response.data.length;
        // console.log(n);

        if(n==0){

            alert('no se encontro provincias');

        }else {
            $scope.provincias=[];
            for(var i=0;i<n;i++){

                $scope.provincias.push(response.data[i]);

            }
            $scope.provinciaSeleccionada=$scope.provincias[0]._id;
           // console.log($scope.provinciaSeleccionada);
            $scope.buscarCiudadPorProvincia1();

        }


    }, function errorCallback(response) {
        console.log('entra');
        //  Console.log(response);
        $scope.mesaje = response.mensaje;

    });





        $http({

            method: 'GET',
            url: myProvider.getEstadoCivil(),

            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
            //console.log('entra url');
            //console.log(url);

            var n = response.data.length;
            // console.log(n);

            if(n==0){

                alert('no se encontro provincias');

            }else {
                $scope.estado_civil=[];
                for(var i=0;i<n;i++){

                    $scope.estado_civil.push(response.data[i]);

                }


            }


        }, function errorCallback(response) {
            console.log('entra');
            //  Console.log(response);
            $scope.mesaje = response.mensaje;

        });




        $http({

            method: 'GET',
            url: myProvider.getNivelEstudio(),

            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
            //console.log('entra url');
            //console.log(url);

            var n = response.data.length;
            // console.log(n);

            if(n==0){

                alert('no se encontro provincias');

            }else {
                $scope.nivel_estudio=[];
                for(var i=0;i<n;i++){

                    $scope.nivel_estudio.push(response.data[i]);

                }
              //  console.log($scope.nivel_estudio);

            }


        }, function errorCallback(response) {
            console.log('entra');
            //  Console.log(response);
            $scope.mesaje = response.mensaje;

        });



        $http({

            method: 'GET',
            url: myProvider.getEmpresa(),

            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
            //console.log('entra url');
            //console.log(url);

            var n = response.data.length;
            // console.log(n);

            if(n==0){

                alert('no se encontro provincias');

            }else {
                $scope.empresas=[];

                for(var i=0;i<n;i++){

                    $scope.empresas.push(response.data[i]);

                   // console.log($scope.empresas);
                }
                $scope.empresaSeleccionada=$scope.empresas[0]._id;
                //console.log($scope.empresaSeleccionada);
               // console.log($scope.empresas);
                $scope.buscarDependenciaPorEmpresa();

            }


        }, function errorCallback(response) {
            console.log('entra');
            //  Console.log(response);
            $scope.mesaje = response.mensaje;

        });






    $scope.load = function() {


    }





    $scope.buscarDependenciaPorEmpresa = function(){


        $scope.dependencia=[]
       // console.log($scope.empresaSeleccionada);
        $http({
            method: 'GET',
            url: myProvider.getDependencia() + '?id_empresa=' +$scope.empresaSeleccionada,

            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
         //   console.log($scope.empresaSeleccionada);
            //console.log(url);

            var n = response.data.length;
            // console.log(n);

            if(n==0){

                alert('no se encontro provincias');

            }else {
                $scope.dependencia=[];
                for(var i=0;i<n;i++){

                    $scope.dependencia.push(response.data[i]);

                }
              //  console.log($scope.dependencia);

            }


        }, function errorCallback(response) {

            //  Console.log(response);
            $scope.mesaje = response.mensaje;

        });
        //  console.log($scope.pacienteEncontrado.puesto_trabajo.materia_prima);


    }



   $scope.buscarCiudadPorProvincia1 = function(){

      // $scope.provinciaSeleccionada=JSON.parse(document.getElementById('valor').value);
      // $scope.provinciaSeleccionada=JSON.parse($scope.provinciaSeleccionada);
      //  console.log($scope.provinciaSeleccionada);
        $scope.ciudades=[]

        $http({
            method: 'GET',
            url: myProvider.getCiudades() + '?id_provincia=' +$scope.provinciaSeleccionada,

            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
            //console.log('entra url');
            //console.log(url);
            var n = response.data.length;
            // console.log(n);

            if(n==0){

                alert('no se encontro provincias');

            }else {
                $scope.ciudades=[];
                for(var i=0;i<n;i++){

                    $scope.ciudades.push(response.data[i]);

                }


            }


        }, function errorCallback(response) {

            //  Console.log(response);
            $scope.mesaje = response.mensaje;

        });
        //  console.log($scope.pacienteEncontrado.puesto_trabajo.materia_prima);


    }

}]);