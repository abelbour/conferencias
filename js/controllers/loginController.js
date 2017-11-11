/**
 * Created by Gabriel on 02/11/2017.
 */
app.controller("loginCtrl", function ($rootScope,$location,$cookies) {

    $.getScript("https://apis.google.com/js/api:client.js", function(data, textStatus, jqxhr) {

        var startGoogleLogin = function () {
            gapi.load('auth2', function () {
                // Retrieve the singleton for the GoogleAuth library and set up the client.
                auth2 = gapi.auth2.init({
                    client_id: "83534570315-e6p78h0vo7hdop0i35bg75u2gtlg7s50.apps.googleusercontent.com",
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                });
                attachSignin(document.getElementById('google-sign-in'));
            });
        };

        function attachSignin(element) {

            if(element)
            {
                auth2.attachClickHandler(element, {},
                    function (googleUser) {

                        signInGoogle(googleUser);

                    }, function (error) {
                        alert(JSON.stringify(error, undefined, 2));
                    });
            }

        }


        function signInGoogle(googleUser) {

            var id_token = googleUser.getAuthResponse().id_token;


            $rootScope.verifyGoogleToken(id_token,function (result) {


                if(result)
                {
                    $rootScope.user=result;

                    $location.path('/');

                    $cookies.put("tk",id_token);


                }

            });




        }

        startGoogleLogin();


    });



});