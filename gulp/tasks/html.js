/**
 * Created by Virginia on 5/4/2014.
 */
'use strict';

var gulp = require('gulp'),
	handleErrors = require('../util/handleErrors');

gulp.task('html', function () {
	gulp.src('./src/index.html')
		.pipe(gulp.dest('./builds/development'))
});