angular.module('starter.routes', []).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/00_tab_menu.html"
    }).state('tabs.home', {
        url: "/home",
        views: {
            'home-tab': {
                templateUrl: "templates/01_home.html",
                controller: 'HomeTabCtrl'
            }
        }
    }).state('tabs.cv', {
        url: "/cv",
        views: {
            'cv-tab': {
                templateUrl: "templates/02_cv.html",
                controller: 'CVCtrl'
            }
        }
    }).state('settings', {
        url: '/settings',
        templateUrl: 'templates/03_setting.html',
        controller: 'SettingCtrl'
    });


    $urlRouterProvider.otherwise('/tab/home');
});


