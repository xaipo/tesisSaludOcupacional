/**
 * Created by xaipo on 11/21/2015.
 */

app.controller('CargasController', function ($timeout, $rootScope, $scope, $location, $routeParams) {


    $scope.showCargarArchivos = function (pathurl) {

        $timeout(function () {
            $location.path(pathurl);
            $location.replace();
            console.log($location.path());
        });

    };



});