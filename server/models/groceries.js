var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var GrocerySchema = new Schema({
	'name': String,
	'quantity': String,
	'purchased': Boolean,
	'recipe': Boolean,
	'note': String
});

module.exports = mongoose.model('Grocery', GrocerySchema);