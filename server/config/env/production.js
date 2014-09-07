/**
 * Created by Virginia on 8/16/2014.
 */
'use strict';

var path = require('path');

module.exports = {
	db: 'mongodb://localhost/HomeDashboard',
	appPath : path.normalize(__dirname + '/../../../builds/production/'),
	app: {
		name: 'HomeDashboard'
	}
};