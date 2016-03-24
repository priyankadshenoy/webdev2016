(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider

            .when("/login", {
                templateUrl: "views/user/login.view.html",
                controller: "LoginController",
                controllerAs:"model"
            })

            .when("/home", {
                templateUrl: "views/home/home.view.html"
                //controller: "LoginController",
                //controllerAs:"model"
            })

            .when("/newapp", {
                templateUrl: "views/home/newapplication.view.html"
            })

            .when("/string", {
                templateUrl: "views/functionality/string/string.view.html",
                controller: "StringController",
                controllerAs:"model"
            })

            .when("/stringreplace", {
                templateUrl: "views/functionality/string/stringreplace.view.html",
                controller: "StringController",
                controllerAs:"model"
            })

            .when("/stringjoin", {
                templateUrl: "views/functionality/string/stringjoin.view.html",
                controller: "StringController",
                controllerAs:"model"
            })

            .when("/stringslice", {
                templateUrl: "views/functionality/string/stringslice.view.html",
                controller: "StringController",
                controllerAs:"model"
            })

            .when("/arithmetic", {
                templateUrl: "views/functionality/arithmetic/arithmetic.view.html",
                controller: "ArithmeticController",
                controllerAs:"model"
            })

            .when("/date", {
                templateUrl: "views/functionality/date/date.view.html",
                controller: "DateController",
                controllerAs:"model"
            })

            .when("/datemanipulate", {
                templateUrl: "views/functionality/date/datemanipulate.view.html",
                controller: "DateController",
                controllerAs:"model"
            })

            .when("/boolean", {
                templateUrl: "views/functionality/boolean/boolean.view.html",
                controller: "BooleanController",
                controllerAs:"model"
            })

            .when("/booleanlogical", {
                templateUrl: "views/functionality/boolean/booleanlogical.view.html",
                controller: "BooleanController",
                controllerAs:"model"
            })

            .when('/profile', {
                templateUrl: "views/user/profile.view.html",
                controller: "ProfileController",
                controllerAs: "model"
            })


            .when("/register", {
                templateUrl: "views/user/register.view.html",
                controller:"RegisterController",
                controllerAs:"model"
            })


            .when("/header", {
                templateUrl: "views/header/header.view.html",
                controller:"HeaderController",
                controllerAs:"model"
            })


            .otherwise({
                redirectTo:"login"
            });

    }
})();