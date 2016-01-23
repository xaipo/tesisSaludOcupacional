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



    /*app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/newEmpresa', { templateUrl: '/tesisSaludOcupacional/Client/Administrator/newEmpresa.html', controller: 'EmpresaController' });
        $routeProvider.when('/', { templateUrl: '/indexAdmin.html' });
        $routeProvider.otherwise({ redirectTo: '/error' });

    }]);*/

