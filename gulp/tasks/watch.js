/**
 * Created by Virginia on 8/14/2014.
 */

'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload'),
	runSequence = require('run-sequence'),
	handleErrors = require('../util/handleErrors');

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('./src/**/*.less', ['less']).on('change', livereload.changed);
	gulp.watch('./src/**/*.js', ['js-newer']).on('change', livereload.changed);
	gulp.watch('./src/index.html', ['inject']).on('change', livereload.changed);
	gulp.watch('./src/**/*.tpl.html', ['templates']).on('change', livereload.changed);
});