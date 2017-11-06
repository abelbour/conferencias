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

    $rootScope.arreglos={};
    $rootScope.arreglos.noConfirmados={

        "titulo":"Arreglos por confirmar",
        "lista":
            [
                {"prioridad":"alta","tipo":"entra","fecha":"5 de Julio","discursante":"Abel Bourband","congregacion":"Churruarin","conferencia":"170 - ¿Quién es el único que puede gobernar bien a la humanidad?","descripcion":"El arreglo solicitado todavía no ha sido confirmado por la congregación de orígen.Puede esperar a que el coordinador de los arreglos lo confirme o comunicarse con él para que lo haga."}
          ,
                {"prioridad":"alta","tipo":"sale","fecha":"5 de Julio","discursante":"Abel Bourband","congregacion":"Churruarin","conferencia":"170 - ¿Quién es el único que puede gobernar bien a la humanidad?","descripcion":"El arreglo solicitado todavía no ha sido confirmado por la congregación de orígen.Puede esperar a que el coordinador de los arreglos lo confirme o comunicarse con él para que lo haga."}



            ],
        "texto":"Los siguientes arreglos aún no han sido confirmados."

    };

});