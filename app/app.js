var app = angular.module('quotationTool', ['ngMaterial', 'ngRoute']);

// configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })

            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/quotesheet', {
                templateUrl : 'views/quotesheet.html',
                controller  : 'QuoteSheetCtrl'
            })

            // route for the contact page
            .when('/customerlookup', {
                templateUrl : 'views/customerlookup.html',
                controller  : 'CustomerLookupCtrl'
            });
    });

// create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Welcome, Please select an action';
    });

