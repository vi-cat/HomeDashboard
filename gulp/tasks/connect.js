/**
 * Created by Virginia on 8/14/2014.
 */

'use strict';

var gulp = require('gulp'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	handleErrors = require('../util/handleErrors');

gulp.task('connect-dev', function () {
	connect.server({
		root: 'development',
		port: 8000,
		livereload: true
	});
});