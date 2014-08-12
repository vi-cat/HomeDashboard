var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var GrocerySchema = new Schema({
	'name': String,
	'quantity': Number,
	'purchased': Boolean
});

module.exports = mongoose.model('Grocery', GrocerySchema);