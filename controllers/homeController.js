/**
 * Created by Puers on 01/11/2017.
 */
app.controller("homeCtrl", function ($rootScope) {

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
});