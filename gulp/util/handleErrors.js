/**
 * Created by Virginia on 5/4/2014.
 * Send a notification to the OS when there's a Gulp task error
 */

'use strict';

var notify = require('gulp-notify');

module.exports = function() {
	notify.onError({
		title: 'Compilation Error',
		message: '<%= error.message %>'
	}).apply(this, arguments);
	this.emit('end');
};