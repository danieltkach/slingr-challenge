const Item = require('../models/Item');

const handleNewItem = async (req, res, next) => {
	try {
		const { title, description, active } = req.body;

		const newItem = await Item.create({ title, description, active });
		const { _id } = newItem;
		return res.json({ _id, title, description, active });
	} catch (e) {
		console.error(e.message);
		return res.status(500).json('Item could not be created.');
	}
};

const handleGetAll = async (req, res, next) => {
	try {
		let items = await Item.find();

		return res.json(items);
	} catch (e) {
		console.error(e.message);
		return res.sendStatus(500);
	}
};

const handleDetails = async (req, res, next) => {
	try {
		const { id } = req.params;
		const item = await Item.findOne({ _id: id });
		return res.json(item);
	} catch (error) {
		console.error(error.message);
		return res.status(404).json('Data not found.');
	}
};

const handleToggle = async (req, res, next) => {
	try {
		const { id } = req.params;
		let item = await Item.findOne({ _id: id });
		item.active = item.active ? false : true;
		await item.save();
		return res.json(item);
	} catch (e) {
		console.error(e.message);
		return res.status(400).json('Item status could not be updated.');
	}
};

const handleDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json('Item not found.');
    }
    return res.json(deletedItem);
  } catch (e) {
    console.error(e.message);
    return res.status(500).json('Could not delete the item.');
  }
};

module.exports = { handleNewItem, handleGetAll, handleDetails, handleToggle, handleDelete };
