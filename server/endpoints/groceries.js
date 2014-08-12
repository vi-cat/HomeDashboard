/**
 * Created by Virginia on 8/12/2014.
 */

var Groceries = require('../models/groceries');

exports.getAll = function (req, res) {
	Groceries.find(function (err, groceries) {
		if (err) {
			res.send(err);
		} else {
			res.json(groceries);
		}
	});
};

exports.getOne = function (req, res) {
	Groceries.findById(req.params.id, function (err, grocery) {
		if (err) {
			res.send(err);
		} else {
			res.json(grocery);
		}
	});
};

exports.createNew = function (req, res) {
	var grocery = new Groceries();
	// Dummy data
	grocery.name = 'Test Grocery';
	grocery.quantity = 5;
	grocery.completed = false;

	grocery.save(function (err, grocery) {
		if (err) {
			res.send(err);
		} else {
			res.json(grocery);
		}
	});
};

exports.updateOne = function (req, res) {
	Groceries.findById(req.params.id, function (err, grocery) {
		if (err) {
			res.send(err);
		} else {
			grocery.name = 'Updated Test Grocery';
			grocery.save(function (err, grocery) {
				if (err) {
					res.send(err);
				} else {
					res.json(grocery);
				}
			});
		}
	});
};