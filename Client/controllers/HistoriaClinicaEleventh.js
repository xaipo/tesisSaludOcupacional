/**
 * Created by xaipo on 9/8/2016.
 */
app.controller('HistoriaClinicaEleventh', ['$scope', '$http', '$location','myProvider','$localStorage',  function ($scope,$http,$location,myProvider,$localStorage) {


    $scope.examen_fisico={

        tension_arterial_numerador:'',
        tension_arterial_denominador:'',
        frecuencia_cardiaca:'',
        dieztro:'',
        zurdo:'',
        ambidiestro:'',
        talla:'',
        peso:'',
        indice_masa_corporal:'',
        interpretacion_imc:''

    };
    $scope.selectLateralidadCerebral;


    $scope.getHistoria= function(){

        $scope.historiaClinica=JSON.parse(window.localStorage.getItem('hC'));
        console.log($scope.historiaClinica);

    }

}]);