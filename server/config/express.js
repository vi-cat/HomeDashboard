/**
 * Created by Virginia on 5/2/2014.
 * Sets up and configures Express app
 */

var util = require('./util'),
	express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	appPath = process.cwd();

module.exports = function (app, db) {
	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev'));
	app.use(bodyParser());
	app.use(methodOverride());

	util.walk(appPath + '/server/routes', '/middlewares', function (path) {
		require(path)(app);
	});
};