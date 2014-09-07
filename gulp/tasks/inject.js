/**
 * Created by Virginia on 5/4/2014.
 */

'use strict';

var gulp = require('gulp'),
	inject = require('gulp-inject'),
	handleErrors = require('../util/handleErrors');

gulp.task('inject', function() {
	return gulp.src('./src/index.html')
		.on('error', handleErrors)
		.pipe(inject(gulp.src('./builds/development/js/**/*.js', {read: false}), {ignorePath: '/builds/development/', addRootSlash: false}))
		.pipe(inject(gulp.src('./builds/development/css/*.css', {read: false}), {ignorePath: '/builds/development/', addRootSlash: false}))
		.pipe(gulp.dest('./builds/development/'));
});