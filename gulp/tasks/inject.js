/**
 * Created by Virginia on 5/4/2014.
 */

'use strict';

var gulp = require('gulp'),
	inject = require('gulp-inject'),
	handleErrors = require('../util/handleErrors');

gulp.task('inject', function() {
	gulp.src('./builds/development/index.html')
		.on('error', handleErrors)
		.pipe(inject(gulp.src(['./builds/development/js/*.js', './builds/development/css/*.css'], {read: false})))
		.pipe(gulp.dest('./builds/development'));
});