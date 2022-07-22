const express = require('express');
const authController = require('../controllers/authController');
const validationMiddleware = require('../middlewares/valiadationMiddleware');

const router = express.Router();


router.route('/login').post(authController.postLoginPage);
router.route('/logout').post(authController.postLogout);
router.route('/Auth/me').get(authController.getMe);
router.route("/register").post(validationMiddleware.registerValidator,authController.postRegisterPage);


module.exports = router;