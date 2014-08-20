/**
 * Created by Virginia on 8/14/2014.
 */

'use strict';

var gulp = require('gulp'),
	nodemon = require('gulp-nodemon'),
	handleErrors = require('../util/handleErrors');

gulp.task('develop', function () {
	nodemon({
		script: 'server.js'
	})
});