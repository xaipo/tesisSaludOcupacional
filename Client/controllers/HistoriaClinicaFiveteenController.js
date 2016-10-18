/**
 * Created by xaipo on 10/11/2016.
 */
app.controller('HistoriaClinicaControllerFiveteenth', ['$scope', '$http', '$location','myProvider','$localStorage',  function ($scope,$http,$location,myProvider,$localStorage) {

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


}]);