/**
 * Created by Virginia on 9/6/2014.
 */

'use strict';

var gulp = require('gulp'),
	debug = require('gulp-debug'),
	handleErrors = require('../util/handleErrors');

gulp.task('fonts', function () {
	gulp.src('./bower_modules/Semantic-UI/build/less/fonts/*.{ttf,woff,eof,svg}')
		.on('error', handleErrors)
//		.pipe(debug({verbose: true}))
		.pipe(gulp.dest('./builds/development/fonts/'))
});