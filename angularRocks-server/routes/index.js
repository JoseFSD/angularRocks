const express = require('express');
const router = express.Router();
const uploadImageBand = require('../middleware/uploadImageBand');
const controller = require('../controllers/controller');

// localhost:3000/
router.get('/', controller.getBands);
router.post('/', uploadImageBand, controller.createBand);
router.put('/:id', uploadImageBand, controller.updateBand);
router.delete('/:id', controller.deleteBand);

module.exports = router;
