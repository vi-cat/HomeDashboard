/**
 * Created by Virginia on 5/3/2014.
 */
'use strict';

var express = require('express'),
	mongoose = require('mongoose'),
	app = express();

var config = require('./server/config/config'),
	util = require('./server/config/util'),
	appPath = process.cwd(),
	db = mongoose.connect(config.db);

expressConfig();

bootstrapRoutes();

app.listen(config.port);
console.log('HomeDashboard currently running on port ' + config.port);

exports = module.exports = app;

function expressConfig() {
	var morgan = require('morgan'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override');

	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev'));
	app.use(bodyParser());
	app.use(methodOverride());
}

function bootstrapRoutes() {
	util.walk(appPath + '/server/routes', '/middlewares', function (path) {
		require(path)(app);
	});
}