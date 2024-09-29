const express = require('express');
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const { authorize } = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/products', authorize(['admin']), createProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', authorize(['admin']), updateProduct);
router.delete('/products/:id', authorize(['admin']), deleteProduct);

module.exports = router;
