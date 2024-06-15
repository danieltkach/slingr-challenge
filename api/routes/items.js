const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items');
const { handleNewItem, handleGetAll, handleDetails, handleToggle, handleDelete } = itemsController;

router.post('/new', handleNewItem);
router.get('/get-all', handleGetAll);
router.get('/details/:id', handleDetails);
router.put('/toggle/:id', handleToggle);
router.put('/delete/:id', handleDelete);

module.exports = router;
