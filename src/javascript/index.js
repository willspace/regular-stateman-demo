"use strict";

// import '../css/fcstyle.css';
// import '../css/style2.css';

// require("../css/fcstyle.css");
// require("../css/style2.css");

require([
    'restate',
    'regularjs',
    "../module/app.js",
    "../module/service.js",
    "../module/user.js",
    "../module/index.html",
    "../module/service.service1.js",
    "../module/service.service2.js",
    "../module/service.service3.js",
    "../css/fcstyle.css",
    "../css/style2.css"
], function(
    restate,
    Regular,
    Application,
    Service,
    User,
    Index,
    Service1,
    Service2,
    Service3,
    _style,
    _style2
){

    var format = function(){
        function fix(str){
            str = "" + (str || "");
            return str.length <= 1? "0" + str : str;
        }
        var maps = {
            'yyyy': function(date){return date.getFullYear()},
            'MM': function(date){return fix(date.getMonth() + 1); },
            'dd': function(date){ return fix(date.getDate()) },
            'HH': function(date){ return fix(date.getHours()) },
            'mm': function(date){ return fix(date.getMinutes())}
        }

        var trunk = new RegExp(Object.keys(maps).join('|'),'g');
        return function(value, format){
            format = format || "yyyy-MM-dd HH:mm";
            value = value? new Date(value):new Date();

            return format.replace(trunk, function(capture){
                return maps[capture]? maps[capture](value): "";
            });
        }
    }();

    Regular.filter("format", format)



    // Start Stateman.

    var stateman = restate({
        view: document.getElementById("#app"),
        Component: Regular
    });


    stateman
    // application core
        .state("app", Application, "")

        // home page
        .state("app.index", Index, { url: ""})

        //User
        .state("app.user", User)


        // service
        .state("app.service", Service)
        .state("app.service.service1", Service1,"")
        .state("app.service.service2", Service2,"service2")
        .state("app.service.service3", Service3,"service3")

        // redirect when notfound
        .on("notfound", function(){
            this.go("app.index", {replace: true})
        })

        // authen, need login first
        .on("begin", function(option){
            console.log("change"+option.current.name);
        })

        // start the routing
        .start({html5: false, prefix: "!"});


    window.Regular = Regular;


});

