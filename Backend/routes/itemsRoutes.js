const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Rutas específicas deben ir antes que las dinámicas
router.get('/stats/data', itemsController.getItemStats);

router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getItemById);
router.post('/', itemsController.createItem);
router.put('/:id', itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
