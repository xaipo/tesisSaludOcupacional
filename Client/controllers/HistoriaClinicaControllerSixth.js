/**
 * Created by xaipo on 8/31/2016.
 */
app.controller('HistoriaClinicaSixth', ['$scope', '$http', '$location','myProvider','$localStorage',  function ($scope,$http,$location,myProvider,$localStorage) {

    $scope.anstecedentes_salud;
    $scope.antescedentes_familiares={
        codigo:'',
        patologia:'',
        parentezco:''
    };

    $scope.antescedetnes_personales;
    $scope.lsita_parentezco=[];
    $scope.familiar_selected;

    $scope.listaAntescedentesFamiliares=[];
    $scope.listaAntescedentesPersonales=[];
    $scope.contador=0;


    $http({

        method: 'GET',
        url: myProvider.getParentezco(),

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

                $scope.lsita_parentezco.push(response.data[i]);
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



    $scope.agregarP = function(){
            console.log($scope.antescedentes_familiares)
        if($scope.antescedentes_familiares.patologia!=''&&$scope.antescedentes_familiares.patologia!=undefined){
            $scope.antescedentes_familiares.codigo=$scope.contador++;
            $scope.antescedentes_familiares.parentezco=JSON.parse($scope.antescedentes_familiares.parentezco);
            $scope.listaAntescedentesFamiliares.push($scope.antescedentes_familiares);
            $scope.antescedentes_familiares={
                codigo:'',
                patologia:'',
                parentezco:''
            };
        }else{
            alert('Ingrese Patologia y parentezco para agregar a la lista');

        }
    }


    $scope.quitar= function (){
        // console.log($scope.accidentesTrabajoSelected);
        var n=  $scope.listaAntescedentesFamiliares.length;
        console.log(n);
        var pos;
        for(var i=0;i<n;i++ ){

            if($scope.listaAntescedentesFamiliares[i].codigo==$scope.familiar_selected.codigo){


                pos=i;
                break;
            }
        }
        console.log(pos);
        $scope.listaAntescedentesFamiliares.splice(pos,1);
        //  console.log($scope.listaRiesgosOcupacionales);
        //  console.log($scope.contador);
    }

    $scope.setClickedRow = function(index,item){  //function that sets the value of selectedRow to current index

        console.log('entra');
        $scope.selectedRow = index;
        $scope.familiar_selected=item;
        // console.log(item);
        // console.log($scope.accidentesTrabajoSelected);

        /*console.log($scope.selectedRow);
         console.log(item);*/
    }


}]);