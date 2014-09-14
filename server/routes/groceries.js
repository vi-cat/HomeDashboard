/**
 * Created by Virginia on 8/12/2014.
 * Handles the API for /groceries
 */

'use strict';

var groceriesEndpoint = require('../endpoints/groceries');

module.exports = function (server) {
	server.get('/groceries', groceriesEndpoint.getAll);
	server.get('/groceries/urgent', groceriesEndpoint.getUrgent);
	server.post('/groceries', groceriesEndpoint.createNew);
	server.get('/groceries/:id', groceriesEndpoint.getOne);
	server.put('/groceries/:id', groceriesEndpoint.updateOne)
};