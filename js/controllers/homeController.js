/**
 * Created by Puers on 01/11/2017.
 */
app.controller("homeCtrl", function ($rootScope,$location) {

    $rootScope.rango = {"from":1511049600,"to":1520726400};


    function getWeekends(from,to) {

        var months =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

        var f = new Date(from * 1000);

        var t = new Date(to * 1000);

        var daysCant = (to - from)/60/60/24;

        var weekends ={};

        var oneDay =3600 * 1000 *24;

        for(var i = 0 ;i<daysCant;i++)
        {

           var date = new Date(f.getTime() + (i * oneDay));

          if (date.getDay() == 6)
            {

               var sabado = date;

                console.log((sabado.getTime() / 1000));

               var domingo = new Date( date.getTime() + oneDay);

                weekends[sabado.getDate()+" de "+months[sabado.getMonth()]+" - "+domingo.getDate()+" de "+months[domingo.getMonth()]]= {"min": (sabado.getTime() / 1000),"max":(domingo.getTime() / 1000)};

            }


        }

        return weekends;

    }


    $rootScope.weekends =  getWeekends($rootScope.rango.from,$rootScope.rango.to);



    $rootScope.arreglos= [

        {"confirmado":true,"id":4,"tipo":"entra","fecha":1501289923,"discursante":"Abel Bourband","congregacion":"Churruarin","conferencia":"170 - ¿Quién es el único que puede gobernar bien a la humanidad?","descripcion":"El arreglo solicitado todavía no ha sido confirmado por la congregación de orígen.Puede esperar a que el coordinador de los arreglos lo confirme o comunicarse con él para que lo haga."},

        {"confirmado":true,"id":3,"tipo":"sale","fecha":1501376323,"discursante":"Abel Bourband","congregacion":"Churruarin","conferencia":"170 - ¿Quién es el único que puede gobernar bien a la humanidad?","descripcion":"El arreglo solicitado todavía no ha sido confirmado por la congregación de orígen.Puede esperar a que el coordinador de los arreglos lo confirme o comunicarse con él para que lo haga."},


        {"confirmado":false,"id":1,"tipo":"entra","fecha":1501894723,"discursante":"Abel Bourband","congregacion":"Churruarin","conferencia":"170 - ¿Quién es el único que puede gobernar bien a la humanidad?","descripcion":"El arreglo solicitado todavía no ha sido confirmado por la congregación de orígen.Puede esperar a que el coordinador de los arreglos lo confirme o comunicarse con él para que lo haga."}
        ,
        {"confirmado":false,"id":2,"tipo":"sale","fecha":1501981123,"discursante":"Abel Bourband","congregacion":"Churruarin","conferencia":"170 - ¿Quién es el único que puede gobernar bien a la humanidad?","descripcion":"El arreglo solicitado todavía no ha sido confirmado por la congregación de orígen.Puede esperar a que el coordinador de los arreglos lo confirme o comunicarse con él para que lo haga."}

    ];

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





    $rootScope.todos=[{'list':$rootScope.arreglos,'filter':{'confirmado':true},'range':$rootScope.range}];
    $rootScope.entran=[{'list':$rootScope.arreglos,'filter':{'confirmado':true,'tipo':'entra'}}];
    $rootScope.salen=[{'list':$rootScope.arreglos,'filter':{'confirmado':true,'tipo':'sale'}}];


    $rootScope.conftodos=[{'list':$rootScope.arreglos,'filter':{'confirmado':false}}];
    $rootScope.confentran=[{'list':$rootScope.arreglos,'filter':{'confirmado':false,'tipo':'entra'}}];
    $rootScope.confsalen=[{'list':$rootScope.arreglos,'filter':{'confirmado':false,'tipo':'sale'}}];










});