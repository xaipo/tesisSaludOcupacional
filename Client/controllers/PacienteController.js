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
        edad:"",
        estado_civil:"",
        nivel_estudios:"",
        puesto_trabajo:"",
        telefono:"",

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
    $scope.cargo=[];
    $scope.jornada=[];
    $scope.maquinaria=[];
    $scope.materiaPrima=[];
    $scope.herramientas=[];
    $scope.proteccion=[];
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
    $scope.selectedProteccion="";
    $scope.listaSeleccionProteccion=[];


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
    // <editor-fold defaultstate="collapsed" desc="Proteccion">
    $http({

        method: 'GET',
        url: myProvider.getProteccion(),

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
            $scope.proteccion=[];

            for(var i=0;i<n;i++){

                $scope.proteccion.push(response.data[i]);

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
    // <editor-fold defaultstate="collapsed" desc="Iteradores de seleccion para cambios en listas">
    $scope.selectedMaq=function(){


        if($scope.selectedMaquinaria!=undefined) {
            $scope.selectedMaquinaria=JSON.parse($scope.selectedMaquinaria);
            $scope.listaSeleccionMaquinaria.push($scope.selectedMaquinaria);

            var n = $scope.maquinaria.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.maquinaria[i]._id == $scope.selectedMaquinaria._id) {
                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.maquinaria.splice(pos, 1);
            //$scope.maquinaria.cleanData(undefined);
            console.log($scope.listaSeleccionMaquinaria);
            console.log($scope.maquinaria);
            //$scope.maquinaria.removeItem($scope.selectedMaquinaria);
        }

    }
    $scope.selectedMaq1=function(){


        if( $scope.selectedMaquinaria!=undefined) {
            $scope.selectedMaquinaria=JSON.parse($scope.selectedMaquinaria);
            $scope.maquinaria.push($scope.selectedMaquinaria);
            // $scope.listaSeleccionMaquinaria.removeItem($scope.selectedMaquinaria._id);

            var n = $scope.listaSeleccionMaquinaria.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaSeleccionMaquinaria[i]._id == $scope.selectedMaquinaria._id) {
                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.listaSeleccionMaquinaria.splice(pos, 1);
            // $scope.listaSeleccionMaquinaria.cleanData(undefined);
        //    console.log($scope.maquinaria);
           // console.log($scope.listaSeleccionMaquinaria);
        }

    }



    $scope.selectedHerra=function(){

      /*  $scope.selectedHerramientas=JSON.parse($scope.selectedHerramientas);
        $scope.listaSeleccionHerramientas.push($scope.selectedHerramientas);
        $scope.selectedHerramientas.pop($scope.selectedHerramientas);*/

        if($scope.selectedHerramientas!=undefined) {
            $scope.selectedHerramientas=JSON.parse($scope.selectedHerramientas);
            $scope.listaSeleccionHerramientas.push($scope.selectedHerramientas);

            var n = $scope.herramientas.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.herramientas[i]._id == $scope.selectedHerramientas._id) {
                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.herramientas.splice(pos, 1);
            //$scope.maquinaria.cleanData(undefined);
            //console.log($scope.listaSeleccionMaquinaria);
           // console.log($scope.maquinaria);
            //$scope.maquinaria.removeItem($scope.selectedMaquinaria);
        }

       // $scope.herramientas[aux].remove();


    }

    $scope.selectedHerra1=function(){

       /* $scope.selectedHerramientas=JSON.parse($scope.selectedHerramientas);
        $scope.herramientas.push($scope.selectedHerramientas);
        $scope.listaSeleccionHerramientas.pop($scope.selectedHerramientas);*/

        if($scope.selectedHerramientas!=undefined) {
            $scope.selectedHerramientas=JSON.parse($scope.selectedHerramientas);
            $scope.herramientas.push($scope.selectedHerramientas);

            var n = $scope.herramientas.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaSeleccionHerramientas[i]._id == $scope.selectedHerramientas._id) {
                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.listaSeleccionHerramientas.splice(pos, 1);
            //$scope.maquinaria.cleanData(undefined);
            //console.log($scope.listaSeleccionMaquinaria);
            // console.log($scope.maquinaria);
            //$scope.maquinaria.removeItem($scope.selectedMaquinaria);
        }


    }



    $scope.selectedMateriaPr=function(){


        if($scope.selectedMateriaPrima!=undefined) {
            $scope.selectedMateriaPrima = JSON.parse($scope.selectedMateriaPrima);
            $scope.listaSeleccionMateriaPrima.push($scope.selectedMateriaPrima);

            var n = $scope.materiaPrima.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.materiaPrima[i]._id == $scope.selectedMateriaPrima._id) {
                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.materiaPrima.splice(pos, 1);
        }


    }

    $scope.selectedMateriaPr1=function() {


        if ($scope.selectedMateriaPrima != undefined) {
            $scope.selectedMateriaPrima = JSON.parse($scope.selectedMateriaPrima);
            $scope.materiaPrima.push($scope.selectedMateriaPrima);

            var n = $scope.listaSeleccionMateriaPrima.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaSeleccionMateriaPrima[i]._id == $scope.selectedMateriaPrima._id) {
                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.listaSeleccionMateriaPrima.splice(pos, 1);

        }

    }

    $scope.selectedProteccionF=function(){


        if ($scope.selectedProteccion != undefined) {
            $scope.selectedProteccion = JSON.parse($scope.selectedProteccion);
            $scope.listaSeleccionProteccion.push($scope.selectedProteccion);

            var n = $scope.proteccion.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.proteccion[i]._id == $scope.selectedProteccion._id) {
                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.proteccion.splice(pos, 1);

        }

    }

    $scope.selectedProteccionF1=function(){


        if ($scope.selectedProteccion != undefined) {
            $scope.selectedProteccion = JSON.parse($scope.selectedProteccion);
            $scope.proteccion.push($scope.selectedProteccion);

            var n = $scope.listaSeleccionProteccion.length;
            var pos = "";
            for (var i = 0; i < n; i++) {

                if ($scope.listaSeleccionProteccion[i]._id == $scope.selectedProteccion._id) {
                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.listaSeleccionProteccion.splice(pos, 1);

        }

    }
    // </editor-fold>
    $scope.savePaciente= function(){
        $scope.paciente.fecha_nacimiento=document.getElementById('datepicker1').value;
        console.log("emtra");
        console.log($scope.paciente);



    }

   // $scope.i=0;

    $scope.test=function(i){

        console.log('entro');
      // for(var i=0;i<1000000;i++)
       // {
        //    $scope.mensaje = "procesando";

                $http({
                    method: 'POST',
                    url: 'http://localhost:3000/api/pacientes',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {"cedula":"060400938-1",
                        "puesto_trabajo":"5702e1a356b5bc6c1bd4026f",
                        "primer_nombre":"jairo",
                        "segundo_nombre":"andres",
                        "primer_apellido":"gonzalez",
                        "segundo_apellido":"naranjo",
                        "sexo":"M","fecha_nacimiento":
                            "09/03/1992",
                        "ciudad":"56f9521bc6dd88cc004a2015",
                        "edad":24,
                        "telefono":"2944848",
                        "estado_civil":"56f953360e89c85415d74c68",
                        "nivel_estudio":"56f95520738f09f8145668b1"}


                }).then(function successCallback(response) {
                    if(i==10000000){
                        alert('prueba finalizada');
                        return;

                    }else {
                        $scope.test(i++);
                    }

                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                   // console.log(response);
                    //$scope.mesaje = response.mensaje;

                });

                //$scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";

         //  }



    };
}]);