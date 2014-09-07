/**
 * Created by Virginia on 9/5/2014.
 */


angular.module('homeDashboard.overview')
	.config(function config($stateProvider) {
		$stateProvider.state('overview', {
			url: '/',
			data: {
				pageTitle: 'Overview'
			},
			views: {
				'': {
					templateUrl: 'overview/overview.tpl.html',
					controller: 'overviewController'
				},
				'urgentGroceries@overview': {
					templateUrl: 'overview/urgentGroceries.tpl.html',
					controller: 'urgentGroceriesController'
				}
			}
		})
	})
	.controller('overviewController', function overviewController($scope) {

	}
);