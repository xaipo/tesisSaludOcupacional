/**
 * Created by xaipo on 11/6/2016.
 */
app.controller('ControllerModificarAccidentes', ['$scope', '$http', '$location', 'myProvider', '$localStorage', function ($scope, $http, $location, myProvider, $localStorage) {


    $scope.historiaClinica = '';

    $scope.listaAccidentesTrabajo=[];


    $scope.iniciar=function() {

        $scope.historiaClinica=JSON.parse(window.localStorage.getItem('hm'));
        console.log($scope.historiaClinica);
        var n = $scope.historiaClinica.accidentesTrabajo.length;
        $scope.listaAccidentesTrabajo=[];
        for (var i = 0; i < n; i++) {
            $http({

                method: 'GET',
                url: myProvider.getAccidentesTrabajo()+'?_id='+$scope.historiaClinica.accidentesTrabajo[i],

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


                        $scope.listaAccidentesTrabajo.push(response.data[i]);
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

        }
    }



        /*$scope.historiaCLinc={
            "_id" : "581fb2761bc3fc7c4a1b5320",
            "tipo_examen" : "56f956af407c173c08243c5c",
            "fecha_examen" : "11/06/2016",
            "concepto" : "A",
            "restricciones_limitaciones" : "asd",
            "recomendaciones" : "asd",
            "remision_especialista" : "S",
            "nombre_especialista" : "asdasd",
            "reubicacion" : "S",
            "estado" : 1,
            "diagnostico_noOcupacioanl" : ["581f3857ba03cd607011d41e"],
            "diagnostico_ocupacional" : ["581f3857ba03cd607011d41e"],
            "examen_fisico" : [],
            "examenes_paraclinicos" : [],
            "examenes_laboratorio" : [],
            "organos_sistemas" : [],
            "habitos_toxicos" : [],
            "inmunizacion" : ["581fb2761bc3fc7c4a1b5318"],
            "antescedentes_personales" : ["581fb2761bc3fc7c4a1b531a"],
            "antescedentes_familiares" : ["581fb2761bc3fc7c4a1b5317"],
            "enfermedades_actuales_historicas" : ["581fb2761bc3fc7c4a1b5316"],
            "ausentismo" : ["581fb2761bc3fc7c4a1b5315"],
            "gineco_obstetra" : [],
            "accidentesTrabajo" : ["581fb2761bc3fc7c4a1b5314"],
            "riesgos_ocupacionales" : ["581fb2761bc3fc7c4a1b5319"],
        }

        window.localStorage.setItem("hm", JSON.stringify($scope.historiaCLinc));*/




} ]);
