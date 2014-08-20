/**
 * Created by Virginia on 5/4/2014.
 */
'use strict';

var gulp = require('gulp'),
	less = require('gulp-less'),
	minify = require('gulp-minify-css'),
	handleErrors = require('../util/handleErrors');

gulp.task('less', function () {
	gulp.src('./src/common/app.less')
		.on('error', handleErrors)
		.pipe(less())
		.pipe(minify({keepSpecialComments: 0}))
		.pipe(gulp.dest('./builds/development/css'))
});