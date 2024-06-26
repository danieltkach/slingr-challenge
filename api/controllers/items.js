const Item = require('../models/Item');

const handleEditItem = async (req, res) => {
  try {
    const { id, name, description, quantity, active } = req.body;

    if (id) {
      // Update existing item
      const existingItem = await Item.findById(id);
      if (!existingItem) {
        return res.status(404).json({ message: 'Item not found' });
      }

      existingItem.name = name || existingItem.name;
      existingItem.description = description || existingItem.description;
      existingItem.quantity = quantity !== undefined ? quantity : existingItem.quantity;
      existingItem.active = active !== undefined ? active : existingItem.active;

      await existingItem.save();
      return res.json({ id: existingItem._id, name: existingItem.name, description: existingItem.description, quantity: existingItem.quantity, active: existingItem.active });
    } else {
      // Create new item
      const newItem = await Item.create({ name: name.toString(), description: description.toString(), quantity: quantity.toString(), active: !!active });
      const { _id, quantity: defaultQuantity } = newItem;
      return res.json({ id: _id, name, description, quantity: quantity ? quantity : defaultQuantity, active });
    }
  } catch (e) {
    console.error(e.message);
    return res.status(500).json('Item could not be created or updated.');
  }
};


const handleGetAll = async (req, res) => {
  try {
    let items = await Item.find();
    const mappedItems = items.map(i => ({ id: i._id, name: i.name, description: i.description, quantity: i.quantity, active: i.active }));
    return res.json(mappedItems);
  } catch (e) {
    console.error(e.message);
    return res.sendStatus(500);
  }
};

const handleDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findOne({ _id: id });
    if (!item) return res.status(404).json({ message: 'Item not found.' });

    return res.json(item);
  } catch (error) {
    console.error(error.message);
    return res.status(404).json('Data not found.');
  }
};

const handleToggle = async (req, res) => {
  try {
    const { id } = req.params;
    let item = await Item.findOne({ _id: id });
    if (!item) return res.status(404).json({ message: 'Item not found.' });

    item.active = item.active ? false : true;
    await item.save();
    return res.json(item);
  } catch (e) {
    console.error(e.message);
    return res.status(400).json('Item status could not be updated.');
  }
};

const handleDelete = async (req, res) => {
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

module.exports = { handleEditItem, handleGetAll, handleDetails, handleToggle, handleDelete };
