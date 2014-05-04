/**
 * Created by Virginia on 5/4/2014.
 */
'use strict';

var browserify = require('browserify'),
	gulp = require('gulp'),
	handleErrors = require('../util/handleErrors'),
	source = require('vinyl-source-stream');

gulp.task('js', function () {
	return browserify({
		entries: ['./src/app.js'],
		extensions: ['js']
	})
		.bundle({debuf: true})
		.on('error', handleErrors)
		.pipe(source('app.js'))
		.pipe(gulp.dest('./builds/development'))
});