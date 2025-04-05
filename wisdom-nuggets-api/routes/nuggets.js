const express = require('express');
const router = express.Router();
const nuggetsController = require('../controllers/nuggetsController');


router.get('/', nuggetsController.getAllNuggets);


router.get('/random', nuggetsController.getRandomNugget);


router.post('/', nuggetsController.addNugget);


router.delete('/:id', nuggetsController.deleteNugget);

module.exports = router;
