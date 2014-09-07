/**
 * Created by Virginia on 5/4/2014.
 */
'use strict';

var gulp = require('gulp'),
	templateCache = require('gulp-angular-templatecache'),
	handleErrors = require('../util/handleErrors');

gulp.task('templates', function () {
	gulp.src(['./src/**/**.tpl.html'])
		.on('error', handleErrors)
		.pipe(templateCache({module: 'templatesCache', standalone: true}))
		.pipe(gulp.dest('./builds/development/js/'))
});