const express = require('express');
const router = express.Router();
const ctrlProd = require('../Controllers/product')

router.get('/', ctrlProd.read);
router.post('/', ctrlProd.create);
router.put('/', ctrlProd.update);
router.delete('/', ctrlProd.delete);

module.exports = router