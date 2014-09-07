/**
 * Created by Virginia on 5/2/2014.
 */
'use strict';

var path = require('path');

module.exports = {
	db: 'mongodb://localhost/HomeDashboard',
	appPath : path.normalize(__dirname + '/../../../builds/development/'),
	app: {
		name: 'HomeDashboard (Development)'
	}
};