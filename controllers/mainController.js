/**
 * Created by Gabriel on 02/11/2017.
 */
app.controller("mainCtrl", function ($rootScope,$location,$http,$cookies) {

    $rootScope.error=function (e) {
        console.log(e);
    }



    $rootScope.verifyGoogleToken=function(tk,callback) {

        $http.get("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token="+tk).then(
            function (res) {


                if(res.data.error_description)
                {

                    return callback(false);
                }
                else
                {
                   return callback({name:res.data.given_name,surname:res.data.family_name,idtoken:tk,picture:res.data.picture,type:"gp"})
                }

            },
            function (e) {

                $rootScope.error(e);
                return callback(false);
            }
        );



    }

    $rootScope.logout=function () {

        $cookies.remove("tk");
        $location.path('/login');

    }

    $rootScope.verifyLogin=function (callback) {

        var token=($cookies.get("tk"))?$cookies.get("tk"):"";

        $rootScope.verifyGoogleToken(token,function (result) {

            $rootScope.user=result;

            callback(result);

        })
    }

    $rootScope.$on('$routeChangeStart', function (event) {


        $rootScope.verifyLogin(function (result) {
            if($location.path()!="/login" && !result)
            {

                return  $location.path('/login');
            }
            else if($location.path()=="/login" && result)
            {

                return $location.path('/');
            }

        });


    });
});