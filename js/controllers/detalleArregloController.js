/**
 * Created by Gabriel on 13/11/2017.
 */


app.controller("detalleArregloCtrl", function ($rootScope,$location,$routeParams) {

    $rootScope.loadArreglo=function (id) {

        //TODO obtener el arreglo via get

        $rootScope.arreglo = $rootScope.arreglos.filter(function (el) {return el.id==id;  })[0];

    }


    $rootScope.loadArreglo($routeParams.id);

});
