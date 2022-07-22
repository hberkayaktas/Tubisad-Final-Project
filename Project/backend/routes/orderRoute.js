const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();


router.route('/order').post(orderController.postOrder);
router.route('/getorder').get(orderController.getOrders);



module.exports = router;