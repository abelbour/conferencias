/**
 * Created by Gabriel on 02/11/2017.
 */
app.controller("loginCtrl", function ($rootScope,$location) {

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

            auth2.attachClickHandler(element, {},
                function (googleUser) {

                    signInGoogle(googleUser);

                }, function (error) {
                    alert(JSON.stringify(error, undefined, 2));
                });
        }


        //TODO verificar el token en el backend
        function signInGoogle(googleUser) {
            var profile = googleUser.getBasicProfile();
            var id_token = googleUser.getAuthResponse().id_token;

          $rootScope.user={name:profile.getGivenName(),surname:profile.getEmail(),idtoken:id_token,surname:profile["wea"]};

          $location.path('/');

          $rootScope.$apply();


        }

        startGoogleLogin();


    });



});