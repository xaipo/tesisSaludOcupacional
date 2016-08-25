/**
 * Created by xaipo on 8/15/2016.
 */
app.controller('HistoriaClinicaFiveth', ['$scope', '$http', '$location','myProvider','$localStorage',  function ($scope,$http,$location,myProvider,$localStorage) {


    $scope.historiaClinica;
    $scope.ausentismo={
            codigo:'',
            causa:'',
            tiempo:''


    }
    $scope.listaAusentismo;



    $scope.agregar = function(){

        if($scope.ausentismo.causa!=''&&$scope.ausentismo.causa!=undefined){
            $scope.ausentismo.tiempo;
            $scope.listaAusentismo.push($scope.ausentismo);
        }
    }

}]);