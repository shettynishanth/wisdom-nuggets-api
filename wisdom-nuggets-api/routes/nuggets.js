const express = require('express');
const router = express.Router();
const nuggetsController = require('../controllers/nuggetsController');

// ✅ GET: All wisdom nuggets
router.get('/', nuggetsController.getAllNuggets);

// ✅ GET: One random nugget
router.get('/random', nuggetsController.getRandomNugget);

// ✅ POST: Add new nugget (text + author)
router.post('/', nuggetsController.addNugget);

// ✅ DELETE: Remove nugget by ID
router.delete('/:id', nuggetsController.deleteNugget);

module.exports = router;
