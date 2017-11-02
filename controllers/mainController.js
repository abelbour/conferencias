/**
 * Created by Gabriel on 02/11/2017.
 */
app.controller("mainCtrl", function ($rootScope,$location,$http) {

    $http.get("/conferencias/lang/es.json").then(
        function (res) {
          $rootScope.lang=res.data;
        }
    );


    $rootScope.checkLogin=function () {

        //Realizo el checkeo de autenticacion
        if($rootScope.user)
        {

            return $rootScope.user;
        }
        else
        {
            return false;
        }


    }
    $rootScope.$on('$routeChangeStart', function (event) {



        if ( $location.path()!="/login" &&!$rootScope.checkLogin()) {

            //Si no estoy logueado, voy al login
            event.preventDefault();
            $location.path('/login');
        }

        else if($location.path()=="/login" && $rootScope.checkLogin()) {
            //Si estoy logueado e intento entrar al login, voy al home
            event.preventDefault();
            $location.path('/');
        }
    });
});