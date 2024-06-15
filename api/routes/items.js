const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items');
const { handleNewItem, handleGetAll, handleDetails, handleToggle, handleDelete } = itemsController;

router.post('/new', handleNewItem);
router.post('/getAll', handleGetAll);
router.get('/details/:id', handleDetails);
router.put('/toggle', handleToggle);
router.put('/delete', handleDelete);

module.exports = router;
