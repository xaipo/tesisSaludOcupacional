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
        /*$http.get('http://localhost:26077/api/SincronizarBases').
         success(function (data, status, headers, config) {
         if (data == "ok") {
         $scope.mensaje = "Sincronizadas correctamente";
         } else {
         $scope.mensaje = "Error el servidor por seguridad bloquea peticiones seguidas intente más tarde";
         }
         }).
         error(function (data, status, headers, config) {
         $scope.mensaje = "no conecta al servidor";
         });*/

    };



}]);

    /*app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/newEmpresa', { templateUrl: '/tesisSaludOcupacional/Client/Administrator/newEmpresa.html', controller: 'EmpresaController' });
        $routeProvider.when('/', { templateUrl: '/indexAdmin.html' });
        $routeProvider.otherwise({ redirectTo: '/error' });

    }]);*/

