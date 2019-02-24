app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'homeCtrl'
        })
        .when('/analisis', {
            templateUrl: 'html/analisis.html',
            controller: 'analisisCtrl'
        })
        .when('/contacto', {
            templateUrl: 'html/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

});