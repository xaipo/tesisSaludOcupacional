'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("myApp", ['ngRoute'])

    app.config (function($routeProvider ){
   //$locationProvider.html5Mode(true);
    $routeProvider.when("/indexAdmin",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/inicio.html"});
    $routeProvider.when("/newEmpresa",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/newEmpresa.html", controller:'EmpresaController'});
   // $routeProvider.when("/login",{templateUrl:"/tesisSaludOcupacional/Client/login.html", controller:'LoginController'});
});

app.controller('EmpresaController', ['$scope', '$http', function ($scope, $http) {
    $scope.nombre = "asdasd";



}]);


app.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

    $scope.mensaje = "msj";
    $scope.usuario = "";
    $scope.password = "";

    $scope.login = function () {
        $scope.mensaje = "procesando";
        console.log("funciona");
        console.log($scope.usuario);
        console.log($scope.password);

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/usuarios?nombre_usuario='+$scope.usuario,
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(response);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };



}]);

    /*app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/newEmpresa', { templateUrl: '/tesisSaludOcupacional/Client/Administrator/newEmpresa.html', controller: 'EmpresaController' });
        $routeProvider.when('/', { templateUrl: '/indexAdmin.html' });
        $routeProvider.otherwise({ redirectTo: '/error' });

    }]);*/

