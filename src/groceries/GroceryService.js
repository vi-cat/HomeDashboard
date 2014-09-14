/**
 * Created by Virginia on 9/14/2014.
 */

'use strict';

angular.module('homeDashboard.groceries').factory('GroceryService', function($q, $http) {
	return {
		getUrgentGroceries: function() {
			var deferred = $q.defer();
			$http.get('/groceries/urgent')
				.success(function(res) {
					deferred.resolve(res);
				}).error(function(msg, code) {
					console.log(msg + ", " + code);
				});
			return deferred.promise;
		}
	};
});