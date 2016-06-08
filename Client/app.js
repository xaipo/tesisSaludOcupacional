'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("myApp", ['ngStorage','ngRoute'])


function ApiUrl(){

    this.getUser=function(){
        return 'http://localhost:3000/api/usuarios';
    }
    this.getHistoriaClinica=function(){
        return 'http://localhost:3000/api/historiaClinica';
    }
    this.getPaciente=function(){
        return 'http://localhost:3000/api/pacientes';
    }
    this.getPuestoTrabajo=function(){
        return 'http://localhost:3000/api/puestoTrabajo';
    }
    this.getDependencia=function(){
        return 'http://localhost:3000/api/dependencia';
    }
    this.getEmpresa=function(){
        return 'http://localhost:3000/api/empresa';
    }
    this.getTipoHistoria1=function(){
        return 'http://localhost:3000/api/tipoHistoria';
    }
    this.getEstadoCivil=function(){
        return 'http://localhost:3000/api/estadoCivil';
    }
    this.getCiudad=function(){
        return 'http://localhost:3000/api/ciudad';
    }
    this.getNivelEstudio=function(){
        return 'http://localhost:3000/api/nivelEstudio';
    }
    this.getHerramientas=function(){
        return 'http://localhost:3000/api/herramienta';
    }

    this.getProvincia=function(){
        return 'http://localhost:3000/api/provincia';
    }

    this.getCiudades=function(){
        return 'http://localhost:3000/api/ciudad';
    }
    this.getCargo=function(){
        return 'http://localhost:3000/api/cargo';
    }
    this.getMaquinaria=function(){
        return 'http://localhost:3000/api/maquinaria';
    }
    this.getMateriaPrima=function(){
        return 'http://localhost:3000/api/materiaPrima';
    }
    this.getProteccion=function(){
        return 'http://localhost:3000/api/proteccion';
    }
    this.getTipoCie10=function(){
        return 'http://localhost:3000/api/tipoCie10';
    }
    this.getCie10=function(){
        return 'http://localhost:3000/api/cie10';
    }
}

app.factory("myProvider",function(){
   // console.log("factory function");
    return new ApiUrl();

});

    app.config (function($routeProvider ,$provide){
   //$locationProvider.html5Mode(true);
    $routeProvider.when("/",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/inicio.html", controller:'LoginController'});
    $routeProvider.when("/newEmpresa",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/Empresa/ingresarEmpresa.html", controller:'EmpresaController'});
    $routeProvider.when("/newHistory",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/newClinicHistory.html", controller:'HistoriaClinicaController'});
    $routeProvider.when("/first",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/first.html", controller:'HistoriaClinicaController'});
    $routeProvider.when("/second",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/second.html", controller:'HistoriaClinicaController'});

        /*$provide.factory("ApiUrl", function () {
            return {
                urlUsuarios: 'http://localhost:3000/api/usuarios'
            };
        })*/

        //$provide.value('urlUsuarios', 'http://localhost:3000/api/usuarios');




});



//('urlUsuarios', 'http://localhost:3000/api/usuarios');



    /*app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/newEmpresa', { templateUrl: '/tesisSaludOcupacional/Client/Administrator/newEmpresa.html', controller: 'EmpresaController' });
        $routeProvider.when('/', { templateUrl: '/indexAdmin.html' });
        $routeProvider.otherwise({ redirectTo: '/error' });

    }]);*/

