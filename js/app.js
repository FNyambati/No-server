angular.module('myApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: "/views/home.html"
        })
        .state('about', {
            url: '/about',
            templateUrl: "/views/about.html"
        })
        .state('projects', {
            url: '/projects',
            templateUrl: '/views/project.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: '/views/contact.html'
        })
        .state('frog', {
            url: '/frog',
            templateUrl: '/views/frog.html'
        })
});