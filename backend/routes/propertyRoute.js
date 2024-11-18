
const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/propriedades', propertyController.getPropriedades);
router.post('/propriedades', propertyController.addPropriedades);

module.exports = router;
