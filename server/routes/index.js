/**
 * Created by Virginia on 5/3/2014.
 * Handles API for /
 */
'use strict';

var config = require('../config/config');

module.exports = function (server) {

	// Requests catch-all
	server.get('/', function (req, res) {
		res.sendfile('index.html');
	});
};