/**
 * Created by Virginia on 5/3/2014.
 * Handles API for /
 */
'use strict';

module.exports = function (server) {

	// Requests catch-all
	server.get('*', function (req, res) {
		res.sendfile('./src/index.html');
	});

};