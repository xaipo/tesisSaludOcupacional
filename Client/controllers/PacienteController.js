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

    // <editor-fold defaultstate="collapsed" desc="atributos interfaz">
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
    $scope.materiaPrima="";
    $scope.herramientas=[];
    $scope.proteccion;
    $scope.protocolos;
    $scope.search3;
    $scope.search1;
    $scope.search2;
    $scope.search4;
    $scope.search5;
    $scope.search6;
    $scope.search7;
    $scope.search8;
    $scope.selectedMaquinaria="";
    $scope.listaSeleccionMaquinaria=[];
    $scope.selectedHerramientas="";
    $scope.listaSeleccionHerramientas=[];
    $scope.selectedMateriaPrima="";
    $scope.listaSeleccionMateriaPrima=[];

    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="Cargar provincia">
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
    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="Cargar Estado Civil">

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

    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="Nivel Estudio load">
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

    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="Cargar empresa">
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

    // </editor-fold >
    // <editor-fold defaultstate="collapsed" desc="Cargar cargo">
    $http({

        method: 'GET',
        url: myProvider.getCargo(),

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
            $scope.cargo=[];

            for(var i=0;i<n;i++){

                $scope.cargo.push(response.data[i]);

                // console.log($scope.empresas);
            }
         //   $scope.empresaSeleccionada=$scope.empresas[0]._id;
            //console.log($scope.empresaSeleccionada);
            // console.log($scope.empresas);
          //  $scope.buscarDependenciaPorEmpresa();

        }


    }, function errorCallback(response) {
        console.log('entra');
        //  Console.log(response);
        $scope.mesaje = response.mensaje;

    });
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="Maquinaria">
    $http({

        method: 'GET',
        url: myProvider.getMaquinaria(),

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
            $scope.maquinaria=[];

            for(var i=0;i<n;i++){

                $scope.maquinaria.push(response.data[i]);

                // console.log($scope.empresas);
            }
            //   $scope.empresaSeleccionada=$scope.empresas[0]._id;
            //console.log($scope.empresaSeleccionada);
            // console.log($scope.empresas);
            //  $scope.buscarDependenciaPorEmpresa();

        }


    }, function errorCallback(response) {
        console.log('entra');
        //  Console.log(response);
        $scope.mesaje = response.mensaje;

    });
    // </editor-fold>


    // <editor-fold defaultstate="collapsed" desc="Herramientas">
    $http({

        method: 'GET',
        url: myProvider.getHerramientas(),

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
            $scope.herramientas=[];

            for(var i=0;i<n;i++){

                $scope.herramientas.push(response.data[i]);

                // console.log($scope.empresas);
            }
            //   $scope.empresaSeleccionada=$scope.empresas[0]._id;
            //console.log($scope.empresaSeleccionada);
            // console.log($scope.empresas);
            //  $scope.buscarDependenciaPorEmpresa();

        }


    }, function errorCallback(response) {
        console.log('entra');
        //  Console.log(response);
        $scope.mesaje = response.mensaje;

    });
    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="Materia Prima">
    $http({

        method: 'GET',
        url: myProvider.getMateriaPrima(),

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
            $scope.materiaPrima=[];

            for(var i=0;i<n;i++){

                $scope.materiaPrima.push(response.data[i]);

                // console.log($scope.empresas);
            }
            //   $scope.empresaSeleccionada=$scope.empresas[0]._id;
            //console.log($scope.empresaSeleccionada);
            // console.log($scope.empresas);
            //  $scope.buscarDependenciaPorEmpresa();

        }


    }, function errorCallback(response) {
        console.log('entra');
        //  Console.log(response);
        $scope.mesaje = response.mensaje;

    });
    // </editor-fold>
    // <editor-fold defaultstate="collapsed" desc="Busqueda dependencia por Empresa">
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

    // </editor-fold >
    // <editor-fold defaultstate="collapsed" desc="busqueda Ciudad por provincia">
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

    // </editor-fold>




    $scope.selectedMaq=function(){

        $scope.selectedMaquinaria=JSON.parse($scope.selectedMaquinaria);
        $scope.listaSeleccionMaquinaria.push($scope.selectedMaquinaria);
        $scope.maquinaria.pop($scope.selectedMaquinaria);

    }
    $scope.selectedMaq1=function(){

        $scope.selectedMaquinaria=JSON.parse($scope.selectedMaquinaria);
        $scope.maquinaria.push($scope.selectedMaquinaria);
        $scope.listaSeleccionMaquinaria.pop($scope.selectedMaquinaria);


    }



    $scope.selectedHerra=function(){

        $scope.selectedHerramientas=JSON.parse($scope.selectedHerramientas);
        $scope.listaSeleccionHerramientas.push($scope.selectedHerramientas);
        $scope.herramientas.pop($scope.selectedHerramientas);

    }

    $scope.selectedHerra1=function(){

        $scope.selectedHerramientas=JSON.parse($scope.selectedHerramientas);
        $scope.herramientas.push($scope.selectedHerramientas);
        $scope.listaSeleccionHerramientas.pop($scope.selectedHerramientas);

    }



    $scope.selectedMateriaPr=function(){

        $scope.selectedMateriaPrima=JSON.parse($scope.selectedMateriaPrima);
        $scope.listaSeleccionMateriaPrima.push($scope.selectedMateriaPrima);
        $scope.materiaPrima.pop($scope.selectedMateriaPrima);

    }

    $scope.selectedMateriaPr1=function(){

        $scope.selectedMateriaPrima=JSON.parse($scope.selectedMateriaPrima);
        $scope.materiaPrima.push($scope.selectedMateriaPrima);
        $scope.listaSeleccionMateriaPrima.pop($scope.selectedMateriaPrima);

    }

}]);