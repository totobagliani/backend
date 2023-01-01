const productRouter = require('express').Router();

const {
  addProduct,
  getAllProducts,
  getProductsbyTerm,
} = require('../controllers/product');

productRouter.post('/', addProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/search', getProductsbyTerm);

module.exports = productRouter;
