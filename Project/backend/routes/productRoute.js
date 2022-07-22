const express = require('express');
const productControllers = require('../controllers/productControllers');

const router = express.Router();


router.route('/products').get(productControllers.getAllProduct);
router.route('/product/:product_Slug').get(productControllers.getProduct);
router.route('/product/id/:product_Id').get(productControllers.getProductById);
router.route('/add-product').post(productControllers.postAddProduct);
router.route('/update-product/:id').put(productControllers.updateProduct);
router.route('/delete-product/:id').delete(productControllers.deleteProduct);



module.exports=router;