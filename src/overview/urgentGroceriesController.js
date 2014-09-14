/**
 * Created by Virginia on 9/7/2014.
 */

'use strict';

angular.module('homeDashboard.overview')
	.controller('urgentGroceriesController', function urgentGroceriesController($scope, GroceryService) {
		// Clean up variables
		$scope.items = [];

		// Fetch urgent groceries
		GroceryService.getUrgentGroceries()
			.then(function(res) {
				$scope.items = res;
			});

		// Add a single item
		$scope.addItem = function () {

		};

		// Mark as purchased
		$scope.purchase = function(item) {

		};
	});