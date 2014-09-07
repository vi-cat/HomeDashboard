/**
 * Created by Virginia on 5/4/2014.
 */
'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	newer = require('gulp-newer'),
	flatten = require('gulp-flatten'),
	sourcemaps = require('gulp-sourcemaps'),
	handleErrors = require('../util/handleErrors');

var sources = {
	'appjs': './src/app.js',
	'js': './src/**/*.js'
};

var builds = {
	'dev': './builds/development'
};

// For development

gulp.task('js', function () {
	gulp.src([sources.appjs, sources.js])
		.on('error', handleErrors)
		//.pipe(sourcemaps.init())
		//.pipe(concat('app.js'))
		//.pipe(uglify())
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest(builds.dev + '/js'))
});

gulp.task('js-newer', function () {
	return gulp.src([sources.appjs, sources.js])
		.on('error', handleErrors)
		//.pipe(sourcemaps.init())
		//.pipe(concat('app.js'))
		.pipe(newer(builds.dev + '/js'))
		//.pipe(uglify())
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest('./builds/development/js'))
});