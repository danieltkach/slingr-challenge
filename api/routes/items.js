const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items');
const { handleEditItem, handleGetAll, handleDetails, handleToggle, handleDelete } = itemsController;

router.post('/edit', handleEditItem);
router.get('/get-all', handleGetAll);
router.get('/details/:id', handleDetails);
router.put('/toggle/:id', handleToggle);
router.put('/delete/:id', handleDelete);

module.exports = router;
