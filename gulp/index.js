/**
 * Created by Virginia on 5/4/2014.
 */
'use strict';

var fs = require('fs'),
	onlyScripts = require('./util/scriptFilter'),
	tasks = fs.readdirSync('./gulp/tasks').filter(onlyScripts);

tasks.forEach(function(task) {
	require('./tasks/' + task);
});