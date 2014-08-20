var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var GrocerySchema = new Schema({
	'name': String,
	'quantity': String,
	'purchased': Boolean,
	'note': String
});

module.exports = mongoose.model('Grocery', GrocerySchema);