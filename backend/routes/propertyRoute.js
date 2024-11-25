
const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/propriedades', propertyController.getPropriedades);
router.post('/propriedades', propertyController.addPropriedades);
router.get('/propriedades/:id', propertyController.getPropriedadesById);
module.exports = router;
