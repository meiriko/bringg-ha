import angular from 'angular';

import 'angular-ui-router';
import 'angular-sanitize';

import appComponent from './application.component';
import Users from './users';

import './app.scss';

angular
    .module('bringg-ha', ['ui.router', 'ngSanitize', Users])
    .config(($locationProvider) => {
        "ngInject";   // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
        $locationProvider.html5Mode(true);
    })
    .config(($urlRouterProvider) => {
        "ngInject";   // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
        $urlRouterProvider.otherwise('/home');
    })
    .component('app', appComponent)
;

angular
    .element(document)
    .ready(() => angular.bootstrap(document, ['bringg-ha']));

