/**
 * Created by Virginia on 5/4/2014.
 */
'use strict';

var gulp = require('gulp'),
	browserify = require('browserify'),
	handleErrors = require('../util/handleErrors'),
	source = require('vinyl-source-stream');

gulp.task('js', function () {
	return browserify({
		entries: ['./src/app.js'],
		extensions: ['js']
	})
		.bundle({debug: true})
		.on('error', handleErrors)
		.pipe(source('app.js'))
		.pipe(gulp.dest('./builds/development/js'))
});