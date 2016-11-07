/**
 * Created by Leo on 06/11/2016.
 */

app.controller('ControllerValidacionHistoria', ['$scope', '$http', '$location', 'myProvider', '$localStorage', function ($scope, $http, $location, myProvider, $localStorage) {

    $scope.cedula;
    $scope.pacienteEncontrado;
    $scope.historiaClinica;

    $scope.searchUser = function () {

        //console.log( myProvider.getPaciente() + '?cedula=' + $scope.cedula);
        $http({
            method: 'GET',
            url: myProvider.getPaciente() + '?cedula=' + $scope.cedula,

            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
            // console.log('url');
            var n = response.data.length;
            // console.log(n);

            if (n == 0) {

                alert('no se encontro el paciente');

            } else {
                //console.log($scope.pacienteEncontrado.primer_nombre);
                $scope.pacienteEncontrado = response.data[0];
                //console.log($scope.pacienteEncontrado.historiaClinica.find(findTipo));
                /*if ($scope.pacienteEncontrado.historiaClinica.find(findTipo) == undefined) {
                    alert('El paciente no posee historias clinicas');
                } else {
                    if ($scope.pacienteEncontrado.historiaClinica.find(findTipo) != undefined) {
                        //Duplicar la historia Clinica


                    } else {
                        alert('desactivado');
                    }


                }*/
                var n =$scope.pacienteEncontrado.historiaClinica.length;
                var counter = 0;
                var counter1=0;
                for(var i=0;i <= n;i++)
                {
                    if ($scope.pacienteEncontrado.historiaClinica.estado == 1 &&
                        $scope.pacienteEncontrado.historiaClinica.tipo_examen== '56f956af407c173c08243c5c'){

                        counter++;

                    }
                }
                if (counter==0){
                    alert("Ingrese la historia preocupacional")
                }
                if (counter==1){
                    for(var i=0;i <= n;i++)
                    {
                        if ($scope.pacienteEncontrado.historiaClinica.estado == 2 &&
                            $scope.pacienteEncontrado.historiaClinica.tipo_examen== '571bbe7825df3fa80c7be754'){
                            //duplicar
                            counter1++;

                        }
                    }
                    if

                }

            }

        }, function errorCallback(response) {
            //  Console.log(response);
            $scope.mesaje = response.mensaje;

        });
    }


}]);

function findTipo(hc) {
    return hc.tipo_historias == 'Preocupacional/Ingreso';
}

function findEstado(hc) {
    return hc.estado == 'activo';
}