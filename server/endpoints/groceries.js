/**
 * Created by Virginia on 8/12/2014.
 */

var Groceries = require('../models/groceries');

exports.getAll = function (req, res) {
	Groceries.find({purchased: false}, function (err, groceries) {
		if (err) {
			res.send(err);
		}
		res.json(groceries);
	});
};

exports.getOne = function (req, res) {
	Groceries.findById(req.params.id, function (err, grocery) {
		if (err) {
			res.send(err);
		}
		res.json(grocery);
	});
};

exports.createNew = function (req, res) {
	var grocery = new Groceries();
	grocery.purchased = false;
	grocery.name = req.body.name;
	grocery.quantity = req.body.quantity || 1;

	grocery.save(function (err, grocery) {
		if (err) {
			res.send(err);
		}
		res.json(grocery);
	});
};

exports.updateOne = function (req, res) {
	Groceries.findById(req.params.id, function (err, grocery) {
		if (err) {
			res.send(err);
		}
		console.log(req.body);
		grocery.name = req.body.name;
		grocery.quantity = req.body.quantity;
		grocery.purchased = req.body.purchased;

		grocery.save(function (err, grocery) {
			if (err) {
				res.send(err);
			}
			res.json(grocery);
		});
	});
};