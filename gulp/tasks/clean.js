/**
 * Created by Virginia on 5/4/2014.
 */
'use strict';

var gulp = require('gulp'),
	clean = require('gulp-clean'),
	handleErrors = require('../util/handleErrors');

gulp.task('clean', function () {
	gulp.src('./builds/development', {read: false})
		.pipe(clean())
});