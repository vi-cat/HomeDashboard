/**
 * Created by Virginia on 5/4/2014.
 * Filters out non .coffee and .js files. Prevents accidental inclusion of possible hidden files
 */

'use strict';

var path = require('path');

module.exports = function(name) {
	return /(\.(js|coffee)$)/i.test(path.extname(name));
}