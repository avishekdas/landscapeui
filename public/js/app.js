'use strict';

var mainApp = angular.module('mainApp', [ 'ngRoute', 'mainAppControllers' ]);

mainApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        //console.log("In the route controller function");
        $routeProvider.
            when('/login', {
                templateUrl: 'api/partial/login',
                controller: 'LoginCtrl'
            }).
            when('/register', {
                templateUrl: 'api/partial/register',
                controller: 'RegistrationCtrl'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }
]);

// Seperate module and controller for initializing the Cloudant data: database, admin user, and CQ Index
var setupApp = angular.module('setupApp', [ 'setupAppControllers' ]);

var webApp = angular.module('webApp', [ 'ngRoute', 'webAppControllers']);

webApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/main', {
			templateUrl: 'api/partial/auth/home',
			controller: 'HomeCtrl'
        });
		
		$routeProvider.when('/aboutus', {
			templateUrl: 'api/partial/auth/AboutUs',
			controller: 'AboutCtrl'
        });
		
		$routeProvider.when('/success', {
			templateUrl: 'api/partial/auth/success',
			controller: 'SuccessCtrl'
        });
		
		$routeProvider.when('/viewprofile/:userId?', {
			templateUrl: 'api/partial/auth/ViewProfile',
			controller: 'ViewProfileCtrl'
        });
		
		$routeProvider.when('/dashboard', {
			templateUrl: 'api/partial/auth/Dashboard',
			controller: 'DashboardCtrl'
        });
		
		$routeProvider.when('/evaluateresource', {
			templateUrl: 'api/partial/auth/EvaluateResource',
			controller: 'EvaluateCtrl'
        });
		
		$routeProvider.when('/failure', {
			templateUrl: 'api/partial/auth/failure',
			controller: 'FailureCtrl'
        });
		
		$routeProvider.when('/manageevaluator', {
			templateUrl: 'api/partial/auth/ManageEvaluator',
			controller: 'ManageEvalCtrl'
        });
		
		$routeProvider.when('/managerating', {
			templateUrl: 'api/partial/auth/ManageRating',
			controller: 'ManageRateCtrl'
        });
		
		$routeProvider.when('/manageskill', {
			templateUrl: 'api/partial/auth/ManageSkill',
			controller: 'ManageSkillCtrl'
        });
		
		$routeProvider.when('/managecert', {
			templateUrl: 'api/partial/auth/ManageCertification',
			controller: 'ManageCertCtrl'
        });
		
		$routeProvider.when('/selfevaluation', {
			templateUrl: 'api/partial/auth/SelfEvaluation',
			controller: 'SelfEvalCtrl'
        });
		
		$routeProvider.otherwise({
			redirectTo: '/main'
		});
    }
]);