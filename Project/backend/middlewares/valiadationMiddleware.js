const User = require("../models/user");
const { body } = require("express-validator");

exports.registerValidator = [
      body("name").not().isEmpty().withMessage("Please Enter your Name"),
      body("userName")
        .custom((username) => {
          return User.findOne({ userName: username }).then((user) => {
            if (user) {
              return Promise.reject("User name is already exists!");
            }
          });
        }),
      body("email")
        .isEmail()
        .withMessage("Please Enter Valid Email")
        .custom((userEmail) => {
          return User.findOne({ email: userEmail }).then((user) => {
            if (user) {
              return Promise.reject("Email is already exists!");
            }
          });
        }),
      body("password").not().isEmpty().withMessage("Please EnterAPassword <br>"),
    ];