/**
 * Created by Virginia on 5/2/2014.
 * Bootstraps Express app and Mongoose models to node server
 */

var express = require('express'),
	appPath = process.cwd();

module.exports = function (db) {

	// Bootstrap Express
	var app = express();
	require(appPath + '/server/config/express')(app, db);

	// Bootstrap Mongoose models
	bootstrapModels();

	return app;
};

function bootstrapModels() {
	require('../util').walk(appPath + '/server/models', null, function(path) {
		require(path);
	})
}