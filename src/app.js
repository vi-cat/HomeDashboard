/**
 * Created by Virginia on 5/3/2014.
 */

'use scrict';

// Module listing

angular.module('homeDashboard.overview', ['ui.router', 'templatesCache']);
angular.module('homeDashboard', ['ui.router', 'homeDashboard.overview']);

// App start

var app = angular.module('homeDashboard')
	.config(function ($urlRouterProvider, $locationProvider, $httpProvider) {
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix = ('!');
	})
	.run(function ($rootScope) {
	})
	.controller('mainController', function mainController($scope) {
		$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
			$scope.pageTitle = '';
			if (angular.isDefined(toState.data.pageTitle)) {
				$scope.pageTitle += toState.data.pageTitle;
			}
			$scope.pageTitle += ' @ HomeDashboard';
		})
	});