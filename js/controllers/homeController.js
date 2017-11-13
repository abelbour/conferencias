/**
 * Created by Puers on 01/11/2017.
 */
app.controller("homeCtrl", function ($rootScope,$location) {

    $('ul.tabs').tabs();
    $rootScope.add=function (item,list) {


        if(!$rootScope[list])
        {
            $rootScope[list]=[];
        }
        $rootScope[list].push(angular.copy(item));
    }
    $rootScope.delete=function (k,list) {


        if(!$rootScope[list])
        {
            $rootScope[list]=[];
        }

        $rootScope[list].splice(k,1);
    }



    $rootScope.conftodos=[{'list':$rootScope.arreglos,'filter':{'confirmado':false}}];
    $rootScope.confentran=[{'list':$rootScope.arreglos,'filter':{'confirmado':false,'tipo':'entra'}}];
    $rootScope.confsalen=[{'list':$rootScope.arreglos,'filter':{'confirmado':false,'tipo':'sale'}}];



});