/**
 * Created by Virginia on 5/4/2014.
 */
'use strict';

var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('default', function(callback) {
	runSequence('clean', ['js', 'less', 'html'], 'inject', 'watch', 'connect-dev', 'develop', callback);
});