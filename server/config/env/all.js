/**
 * Created by Virginia on 5/2/2014.
 */
'use strict';

var path = require('path'),
	rootPath = path.normalize(__dirname + '../../../');

module.exports = {
	root: rootPath,
	port: process.env.NODE_ENV.HOST || 8080,
	db: process.env.MONGOHQ_URL,
	sessionSecret: 'homeAlone',
	sessionCollection: 'sessions'
};