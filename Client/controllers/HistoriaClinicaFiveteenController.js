/**
 * Created by xaipo on 10/11/2016.
 */
app.controller('HistoriaClinicaControllerFiveteenth', ['$scope', '$http', '$location','myProvider','$localStorage',  function ($scope,$http,$location,myProvider,$localStorage) {


    $scope.historiaClinicaIngreso={
        riesgos_ocupacionales:[],
        accidentesTrabajo:[],
        gineco_obstetra:[],
        ausentismo:[],
        enfermedades_actuales_historicas:[],
        antescedentes_familiares:[],
        antescedentes_personales:[],
        inmunizacion:[]
    };

    $scope.getHistoria = function () {

        $scope.historiaClinica = JSON.parse(window.localStorage.getItem('hC'));
        console.log($scope.historiaClinica);

    }

    $scope.listaSelectedCie10 = [];
    $scope.listaSelectedCie102 = [];
    $scope.medicos = [];
    $scope.cie10Quitar;
    $scope.cie10Quitar2='';
    $scope.tipoCie10 = [];
    $scope.cie10Selected;
    $scope.cie10Select = '';
    $scope.seleccionada;
    $scope.encontrada = "";
    $scope.cie10 = [];
    $scope.listaCie10Selecionada = [];

    $http({

        method: 'GET',
        url: myProvider.getTipoCie10(),

        headers: {
            'Content-Type': 'application/json'
        }

    }).then(function successCallback(response) {
        //console.log('entra url');
        //console.log(url);

        var n = response.data.length;
        // console.log(n);

        if (n == 0) {

            alert('no se encontro el paciente');

        } else {
            //  $scope.tipoCie10=[];
            for (var i = 0; i < n; i++) {

                $scope.tipoCie10.push(response.data[i]);
                // console.log($scope.tipoCie10);

            }
            //$scope.cie10Selected=response.data[0];
            // $scope.busquedaCie10Tipo();

        }


    }, function errorCallback(response) {
        console.log('entra');
        //  Console.log(response);
        $scope.mesaje = response.mensaje;

    });


    $scope.busquedaCie10Tipo = function () {
        console.log($scope.cie10Selected);
        if ($scope.cie10Selected != undefined) {

            $scope.cie10Selected = JSON.parse($scope.cie10Selected);
            $http({

                method: 'GET',
                url: myProvider.getCie10() + "?tipo_cie10=" + $scope.cie10Selected._id,

                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(function successCallback(response) {
                //console.log('entra url');
                //console.log(url);

                var n = response.data.length;
                // console.log(n);

                if (n == 0) {

                    alert('no se encontro el paciente');

                } else {
                    $scope.cie10 = [];
                    for (var i = 0; i < n; i++) {


                        $scope.cie10.push(response.data[i]);
                        if ($scope.cie10[i].estado == 1) {
                            $scope.cie10[i].estado = "activado";
                        } else {

                            $scope.cie10[i].estado = "desactivado";
                        }
                        //  console.log($scope.tipoCie10);

                    }


                }


            }, function errorCallback(response) {
                console.log('entra');
                //  Console.log(response);
                $scope.mesaje = response.mensaje;

            });
        }
    }


    $scope.busquedaPorCodigoPropio = function () {

        console.log("entragunc");


        if ($scope.seleccionada != undefined && $scope.seleccionada != '') {
            $scope.seleccionada = $scope.seleccionada.toUpperCase();
            // $scope.selecc =JSON.parse($scope.seleccionada);
            //  console.log(myProvider.getCie10() + "?codigo_cie10=" + $scope.seleccionada);
            $http({

                method: 'GET',
                url: myProvider.getCie10() + "?codigo_cie10=" + $scope.seleccionada,

                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(function successCallback(response) {
                //console.log('entra url');
                //console.log(url);

                var n = response.data.length;
                // console.log(n);

                if (n == 0) {

                    alert('no se encontro el c?digo ingresado');
                    $scope.encontrada = '';
                } else {
                    // $scope.seleccionada = '';
                    for (var i = 0; i < n; i++) {


                        $scope.encontrada = (response.data[i]);
                        if ($scope.encontrada.estado == 1) {
                            $scope.encontrada.estado = "activado";
                        } else {

                            $scope.encontrada.estado = "desactivado";
                        }
                        //  console.log($scope.tipoCie10);

                    }


                }


            }, function errorCallback(response) {
                console.log('entra');
                //  Console.log(response);
                // $scope.mesaje = response.mensaje;

            });
        }
    }


    $scope.agregar = function () {


        if ($scope.cie10Select != undefined && $scope.cie10Select != '') {

            $scope.cie10Select = JSON.parse($scope.cie10Select);
            console.log($scope.cie10Select);
            $scope.listaSelectedCie10.push($scope.cie10Select);
            $scope.cie10Select = '';
        } else {
            if ($scope.encontrada != undefined && $scope.encontrada != '') {
                // scope.encontrada=JSON.parse($scope.encontrada);
                $scope.listaSelectedCie10.push($scope.encontrada);
                $scope.encontrada = '';
            } else {

                alert('seleccione un sintoma para agregar');
            }

        }


        //   $scope.paraclinico_seleccionado.fecha=document.getElementById('datepicker').value;

        //  console.log($scope.selectRevision);
        //  $scope.paraclinico_seleccionado.codigo=$scope.contador++;
        //   $scope.paraclinico_seleccionado.resultado=JSON.parse($scope.paraclinico_seleccionado.resultado);
        // $scope.selectRevision.codigo=$scope.contador++;


    }

    $scope.quitar = function () {
        // console.log($scope.accidentesTrabajoSelected);

        if ($scope.cie10Quitar != undefined && $scope.cie10Quitar != '') {
            $scope.cie10Quitar = JSON.parse($scope.cie10Quitar);
            var n = $scope.listaSelectedCie10.length;
            console.log(n);
            var pos;
            for (var i = 0; i < n; i++) {


                if ($scope.listaSelectedCie10[i].codigo_cie10 == $scope.cie10Quitar.codigo_cie10) {
                    console.log('entra');

                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.listaSelectedCie10.splice(pos, 1);
            //  console.log($scope.listaRiesgosOcupacionales);
            //  console.log($scope.contador);
        }
    }




    $scope.agregar2=function(){

        if($scope.cie10Quitar!=''&& $scope.cie10Quitar!=undefined){

            $scope.cie10Quitar=JSON.parse($scope.cie10Quitar);
            $scope.listaSelectedCie102.push($scope.cie10Quitar);
        }

    }

    $scope.quitar2=function(){

        if ($scope.cie10Quitar2 != undefined && $scope.cie10Quitar2 != '') {
            $scope.cie10Quitar2 = JSON.parse($scope.cie10Quitar2);
            var n = $scope.listaSelectedCie102.length;
            console.log(n);
            var pos;
            for (var i = 0; i < n; i++) {


                if ($scope.listaSelectedCie102[i].codigo_cie10 == $scope.cie10Quitar2.codigo_cie10) {
                    console.log('entra');

                    pos = i;
                    break;
                }
            }
            console.log(pos);
            $scope.listaSelectedCie102.splice(pos, 1);
            //  console.log($scope.listaRiesgosOcupacionales);
            //  console.log($scope.contador);
        }
    }


    $scope.ingresarHistoriaClinica=function(){

        console.log('ejecuta');

      //  $scope.historiaClinicIngreso = JSON.parse(window.localStorage.getItem('hci'));
       /* var n = $scope.historiaClinica.revision_sistemas.length;
        // console.log($scope.historiaClinica.ginecoObstetra);
        // console.log($scope.historiaClinica);
        var aux=[];
        for (var i = 0; i < n; i++) {

            // console.log( $scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar);
            aux.push($scope.historiaClinica.revision_sistemas[i]._id);

            // console.log($scope.historiaClinicaIngreso.gineco_obstetra);

            //$scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";

            //

        }
        $scope.historiaClinicaIngreso.revision_sistemas=aux;
        window.localStorage.setItem("hci", JSON.stringify($scope.historiaClinicaIngreso));*/

        var n=$scope.historiaClinica.riesgosOcupacionales.length;

        for(var i=0;i<n;i++){
            var vec=[];
           // console.log($scope.historiaClinica.riesgosOcupacionales[i].factores_riesgo);
            var m=$scope.historiaClinica.riesgosOcupacionales[i].factores_riesgo.length;
            for(var j=0;j<m;j++){

                    vec.push($scope.historiaClinica.riesgosOcupacionales[i].factores_riesgo[j]._id);

            }
            $scope.historiaClinica.riesgosOcupacionales[i].factores_riesgo=vec;


             vec=[];
             m=$scope.historiaClinica.riesgosOcupacionales[i].alimentos.length;
            for(var j=0;j<m;j++){

                vec.push($scope.historiaClinica.riesgosOcupacionales[i].alimentos[j]._id);

            }
            $scope.historiaClinica.riesgosOcupacionales[i].alimentos=vec;


            $http({
                method: 'POST',
                url: myProvider.getRiesgosOcupacionales(),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {

                    nombre_empresa : $scope.historiaClinica.riesgosOcupacionales[i].nombre_empresa._id,
                    cargo_empresa:  $scope.historiaClinica.riesgosOcupacionales[i].cargo_empresa,
                    actividades:   $scope.historiaClinica.riesgosOcupacionales[i].actividades,
                    tipo_actividad: $scope.historiaClinica.riesgosOcupacionales[i].tipo_actividad._id,
                    tiempo_anios_exposicion: $scope.historiaClinica.riesgosOcupacionales[i].tiempo_anios_exposicion,
                    factores_riesgo:  $scope.historiaClinica.riesgosOcupacionales[i].factores_riesgo,
                    cualificacion: $scope.historiaClinica.riesgosOcupacionales[i].cualificacion._id,
                    alimentos: $scope.historiaClinica.riesgosOcupacionales[i].alimentos,
                    sintomatologia_individual: $scope.historiaClinica.riesgosOcupacionales[i].sintomatologia_individual,
                    sintomatologia_grupal: $scope.historiaClinica.riesgosOcupacionales[i].sintomatologia_grupal,
                    epp: $scope.historiaClinica.riesgosOcupacionales[i].epp
                }


            }).then(function successCallback(response) {
                //console.log(response.data);
                $scope.historiaClinicaIngreso.riesgos_ocupacionales.push(response.data._id);
                window.localStorage.setItem("hci", JSON.stringify($scope.historiaClinicaIngreso));
               // console.log($scope.historiaClinicaIngreso.riesgos_ocupacionales);





            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                // console.log(response);
                //$scope.mesaje = response.mensaje;

            });

            //$scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";

            //  }

        }
        $scope.second();

    }

    $scope.second=function(){


        $scope.historiaClinicIngreso = JSON.parse(window.localStorage.getItem('hci'));
        //console.log($scope.historiaClinicaIngreso);


        var n=$scope.historiaClinica.accidentesTrabajo.length;

        for(var i=0;i<n;i++){






            $http({
                method: 'POST',
                url: myProvider.getAccidentesTrabajo(),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {

                    fecha_ocurrencia : $scope.historiaClinica.accidentesTrabajo[i].fecha_ocurrencia,
                    nombre_empresa:  $scope.historiaClinica.accidentesTrabajo[i].nombre_empresa.nombre_empresa,
                    naturaleza_lesion:  $scope.historiaClinica.accidentesTrabajo[i].naturaleza_lesion,
                    parte_cuerpo_afectada: $scope.historiaClinica.accidentesTrabajo[i].parte_cuerpo_afectada,
                    dias_incapcidad: $scope.historiaClinica.accidentesTrabajo[i].dias_incapcidad,
                    secuelas:  $scope.historiaClinica.accidentesTrabajo[i].secuelas
                }


            }).then(function successCallback(response) {
                //console.log(response.data);
                $scope.historiaClinicaIngreso.accidentesTrabajo.push(response.data._id);
                window.localStorage.setItem("hci", JSON.stringify($scope.historiaClinicaIngreso));
               // console.log($scope.historiaClinicaIngreso.accidentesTrabajo);





            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                // console.log(response);
                //$scope.mesaje = response.mensaje;

            });

            //$scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";

            //  }

        }
        $scope.third();


    }

    $scope.third=function() {

        $scope.historiaClinicIngreso = JSON.parse(window.localStorage.getItem('hci'));
        var n = $scope.historiaClinica.ginecoObstetra.length;
       // console.log($scope.historiaClinica.ginecoObstetra);
       // console.log($scope.historiaClinica);
        for (var i = 0; i < n; i++) {
             var vec=[];
//           // console.log($scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar.length);
            var m=$scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar.length;
            for(var j=0;j<m;j++) {

                vec.push($scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar[j]._id)

            }
             $scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar=vec;
           // console.log( $scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar);



             $http({
             method: 'POST',
             url: myProvider.getGinecoObstetra(),
             headers: {
             'Content-Type': 'application/json'
             },
             data: {

             normal_anormal:$scope.historiaClinica.ginecoObstetra[i].normal_anormal,
             fecha_ultima_regla: $scope.historiaClinica.ginecoObstetra[i].fecha_ultima_regla,

             partos:$scope.historiaClinica.ginecoObstetra[i].partos,
             aborto: $scope.historiaClinica.ginecoObstetra[i].abortos,
             hijos_vivos:$scope.historiaClinica.ginecoObstetra[i].hijos_vivos,
             embarazos:$scope.historiaClinica.ginecoObstetra[i].embarazos,
             fecha_ultima_citologia:$scope.historiaClinica.ginecoObstetra[i].fecha_ultima_citologia,
             resultados_citologia:$scope.historiaClinica.ginecoObstetra[i].resultados_citologia,

             metodos_planifiacion_familiar: $scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar,
             observaciones: $scope.historiaClinica.ginecoObstetra[i].observacion
             }


             }).then(function successCallback(response) {
             //console.log(response.data);
             $scope.historiaClinicaIngreso.gineco_obstetra.push(response.data._id);
             window.localStorage.setItem("hci", JSON.stringify($scope.historiaClinicaIngreso));
            // console.log($scope.historiaClinicaIngreso.gineco_obstetra);





             }, function errorCallback(response) {
             // called asynchronously if an error occurs
             // or server returns response with an error status.
             // console.log(response);
             //$scope.mesaje = response.mensaje;

             });

             //$scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";

             //

             }
            $scope.fourth()
        }


         $scope.fourth=function(){

             $scope.historiaClinicIngreso = JSON.parse(window.localStorage.getItem('hci'));
             var n = $scope.historiaClinica.ausentismo.length;
             // console.log($scope.historiaClinica.ginecoObstetra);
             // console.log($scope.historiaClinica);
             for (var i = 0; i < n; i++) {

                 // console.log( $scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar);



                 $http({
                     method: 'POST',
                     url: myProvider.getAusentismo1(),
                     headers: {
                         'Content-Type': 'application/json'
                     },
                     data: {

                         causa : $scope.historiaClinica.ausentismo[i].causa,
                         tiempo:  $scope.historiaClinica.ausentismo[i].tiempo,
                     }


                 }).then(function successCallback(response) {
                     //console.log(response.data);
                     $scope.historiaClinicaIngreso.ausentismo.push(response.data._id);
                     window.localStorage.setItem("hci", JSON.stringify($scope.historiaClinicaIngreso));
                     // console.log($scope.historiaClinicaIngreso.gineco_obstetra);





                 }, function errorCallback(response) {
                     // called asynchronously if an error occurs
                     // or server returns response with an error status.
                     // console.log(response);
                     //$scope.mesaje = response.mensaje;

                 });

                 //$scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";

                 //

             }

             $scope.fiveth();
         }


    $scope.fiveth=function(){

        $scope.historiaClinicIngreso = JSON.parse(window.localStorage.getItem('hci'));
        var n = $scope.historiaClinica.enfermedades_actuales_historicas.length;
        // console.log($scope.historiaClinica.ginecoObstetra);
        // console.log($scope.historiaClinica);
        for (var i = 0; i < n; i++) {

            // console.log( $scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar);



            $http({
                method: 'POST',
                url: myProvider.getEnfermedadesActualesHistoricas(),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {

                    sintomas_cie10:  $scope.historiaClinica.enfermedades_actuales_historicas[i].sintoma_cie10._id,
                    fecha: $scope.historiaClinica.enfermedades_actuales_historicas[i].fecha,
                }


            }).then(function successCallback(response) {
                //console.log(response.data);
                $scope.historiaClinicaIngreso.enfermedades_actuales_historicas.push(response.data._id);
                window.localStorage.setItem("hci", JSON.stringify($scope.historiaClinicaIngreso));
                // console.log($scope.historiaClinicaIngreso.gineco_obstetra);





            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                // console.log(response);
                //$scope.mesaje = response.mensaje;

            });

            //$scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";

            //

        }

        $scope.sixth();
    }

    $scope.sixth=function(){

        $scope.historiaClinicIngreso = JSON.parse(window.localStorage.getItem('hci'));
        var n = $scope.historiaClinica.antescedentes_familiares.length;
        // console.log($scope.historiaClinica.ginecoObstetra);
        // console.log($scope.historiaClinica);
        for (var i = 0; i < n; i++) {

            // console.log( $scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar);



            $http({
                method: 'POST',
                url: myProvider.getFamiliares(),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {

                    patologia_cie10:  $scope.historiaClinica.antescedentes_familiares[i].patologia,
                    parentezco: $scope.historiaClinica.antescedentes_familiares[i].parentezco._id,
                }


            }).then(function successCallback(response) {
                //console.log(response.data);
                $scope.historiaClinicaIngreso.antescedentes_familiares.push(response.data._id);
                window.localStorage.setItem("hci", JSON.stringify($scope.historiaClinicaIngreso));
                // console.log($scope.historiaClinicaIngreso.gineco_obstetra);





            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                // console.log(response);
                //$scope.mesaje = response.mensaje;

            });

            //$scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";

            //

        }

        $scope.seventh();
    }
    $scope.seventh=function(){
        $scope.historiaClinicIngreso = JSON.parse(window.localStorage.getItem('hci'));
        var n = $scope.historiaClinica.antescedentes_personales.length;
        // console.log($scope.historiaClinica.ginecoObstetra);
        // console.log($scope.historiaClinica);
        for (var i = 0; i < n; i++) {

            // console.log( $scope.historiaClinica.ginecoObstetra[i].metodos_planificacion_familiar);



            $http({
                method: 'POST',
                url: myProvider.getPersonales(),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {

                    tipo_presonales:$scope.historiaClinica.antescedentes_personales[i].tipo._id,
                    enfermedad_cie10: $scope.historiaClinica.antescedentes_personales[i].enfermedad,
                    observacion: $scope.historiaClinica.antescedentes_personales[i].observacion
                }


            }).then(function successCallback(response) {
                //console.log(response.data);
                $scope.historiaClinicaIngreso.antescedentes_personales.push(response.data._id);
                window.localStorage.setItem("hci", JSON.stringify($scope.historiaClinicaIngreso));
                // console.log($scope.historiaClinicaIngreso.gineco_obstetra);





            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                // console.log(response);
                //$scope.mesaje = response.mensaje;

            });

            //$scope.mensaje = "Para ingresar debe llenar el nombre de la empresa";

            //

        }
        $scope.eigth();
    }

    $scope.eigth=function() {

        $scope.historiaClinicIngreso = JSON.parse(window.localStorage.getItem('hci'));
        var n = $scope.historiaClinica.inmunizacion.length;
        // console.log($scope.historiaClinica.ginecoObstetra);
        // console.log($scope.historiaClinica);
        for (var i = 0; i < n; i++) {
            $http({
                method: 'POST',
                url: myProvider.getImnunizacion(),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {

                    fecha_inmunizacion: $scope.historiaClinica.inmunizacion[i].fecha_inmunizacion,
                    vacuna: $scope.historiaClinica.inmunizacion[i].vacuna._id,
                    dosis_inmunizacion: $scope.historiaClinica.inmunizacion[i].dosis_inmunizacion,
                }


            }).then(function successCallback(response) {
                //console.log(response.data);
                $scope.historiaClinicaIngreso.inmunizacion.push(response.data._id);
                window.localStorage.setItem("hci", JSON.stringify($scope.historiaClinicaIngreso));
                // console.log($scope.historiaClinicaIngreso.gineco_obstetra);


            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                // console.log(response);
                //$scope.mesaje = response.mensaje;

            });
        }
    }


}]);