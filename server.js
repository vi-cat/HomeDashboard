/**
 * Created by Virginia on 5/3/2014.
 */
'use strict';

var mongoose = require('mongoose'),
	config = require('./server/config/config'),
	db = mongoose.connect(config.db),
	app = require('./server/config/system/bootstrap')(db);

app.listen(config.port);
console.log('HomeDashboard currently running on port ' + config.port);

exports = module.exports = app;