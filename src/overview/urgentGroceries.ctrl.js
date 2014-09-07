/**
 * Created by Virginia on 9/7/2014.
 */

'use strict';

angular.module('homeDashboard.overview')
	.controller('urgentGroceriesController', function urgentGroceriesController($scope) {
		$scope.items = [
			{
				'name': 'Cokes',
				'quantity': 'A box of 24',
				'notes': ''
			},
			{
				'name': 'Strawberries',
				'quantity': 'A pack',
				'notes': 'ripe'
			}
		];
	});