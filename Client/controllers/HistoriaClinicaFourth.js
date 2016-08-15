/**
 * Created by xaipo on 8/8/2016.
 */
app.controller('HistoriaClinicaFourth', ['$scope', '$http', '$location','myProvider','$localStorage',  function ($scope,$http,$location,myProvider,$localStorage) {



    $scope.tipoCie10=[];
    $scope.cie10Selected;
    $scope.cie10Select;
    $scope.seleccionada;
    $scope.encontrada="";
    $scope.cie10=[];
    $scope.listaCie10Selecionada=[];
    $scope.selectedRow;
    $scope.seleccionadaCieQuitar;
    $scope.contador=0;





    $scope.getHistoria= function(){

        $scope.historiaClinica=JSON.parse(window.localStorage.getItem('hC'));
        console.log($scope.historiaClinica);

    }

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

        if(n==0){

            alert('no se encontro el paciente');

        }else {
            //  $scope.tipoCie10=[];
            for(var i=0;i<n;i++){

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


    $scope.busquedaCie10Tipo=function()
    {
        console.log($scope.cie10Selected);
        if($scope.cie10Selected!=undefined) {

            $scope.cie10Selected =JSON.parse($scope.cie10Selected);
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
                        if($scope.cie10[i].estado==1){
                            $scope.cie10[i].estado="activado";
                        }else{

                            $scope.cie10[i].estado="desactivado";
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



    $scope.busquedaPorCodigoPropio= function(){

        console.log("entragunc");


        if($scope.seleccionada!=undefined) {
            $scope.seleccionada=$scope.seleccionada.toUpperCase();
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

                    alert('no se encontro el código ingresado');
                    $scope.encontrada='';
                } else {
                   // $scope.seleccionada = '';
                    for (var i = 0; i < n; i++) {


                        $scope.encontrada=(response.data[i]);
                        if($scope.encontrada.estado==1){
                            $scope.encontrada.estado="activado";
                        }else{

                            $scope.encontrada.estado="desactivado";
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




    $scope.agregar=function(){

        if($scope.encontrada!='')
        {
            $scope.encontrada.codigo=$scope.contador;
            $scope.contador++;
            $scope.listaCie10Selecionada.push($scope.encontrada);
            $scope.encontrada="";

        }else{
            console.log( $scope.cie10Select);
            if($scope.cie10Select=="" || $scope.cie10Select==undefined){

               alert('Seleccione una enfermedad de la lista o busquela por código');

            }else{
                $scope.cie10Select=JSON.parse($scope.cie10Select);
                $scope.cie10Select.codigo=$scope.contador;
                $scope.contador++;
                $scope.listaCie10Selecionada.push($scope.cie10Select);
            }

        }

    }


    $scope.setClickedRow = function(index,item){  //function that sets the value of selectedRow to current index

        console.log('entra');
        $scope.selectedRow = index;
        $scope.seleccionadaCieQuitar=item;
       // console.log(item);
       // console.log($scope.accidentesTrabajoSelected);

        /*console.log($scope.selectedRow);
         console.log(item);*/
    }


    $scope.quitar= function (){
       // console.log($scope.accidentesTrabajoSelected);
        var n=  $scope.listaCie10Selecionada.length;
        console.log(n);
        var pos;
        for(var i=0;i<n;i++ ){

            if($scope.listaCie10Selecionada[i].codigo_cie10==$scope.seleccionadaCieQuitar.codigo_cie10){


                pos=i;
                break;
            }
        }
        console.log(pos);
        $scope.listaCie10Selecionada.splice(pos,1);
        //  console.log($scope.listaRiesgosOcupacionales);
        //  console.log($scope.contador);
    }



    $scope.saveFourth=function(){


        $scope.historiaClinica.enfermedades_actuales_historicas=$scope.listaCie10Selecionada;
        window.localStorage.setItem("hC", JSON.stringify($scope.historiaClinica));
        window.location ='/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/forth.html';
    }
}]);