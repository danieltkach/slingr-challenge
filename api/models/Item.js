const DB = require('mongoose');

const itemSchema = new DB.Schema({
	title: { type: String, maxLength: 45 },
	description: { type: String, maxLength: 100 },
  quantity: { type: Number, default: 1 },
	active: { type: Boolean, default: true },
});

module.exports = DB.model('Item', itemSchema);
