const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const crypto = require("crypto");

exports.postLoginPage = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          // USER SESSION
          req.session.userID = user._id;
          const userReq = {
            userName: user.userName,
            name: user.name,
            role: user.role,
            id: user.id,
            token: user.token,
          };

          res.status(201).end(JSON.stringify({ userReq }));
        } else {
          const error = "hatalı giriş happened";
          res.status(400).end(JSON.stringify({ error }));
        }
      });
    } else {
      const error = "Kullanıcı Bulunamadı";
      res.status(400).end(JSON.stringify({ error }));
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const token = req.headers.token;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    //console.log(token);
    if (token) {
      const user = await User.findOne({ token: token });
      if (user) {
        const userReq = {
          userName: user.userName,
          name: user.name,
          role: user.role,
          id: user.id,
        };

        res.status(201).end(JSON.stringify({ userReq }));
      } else {
        err = "token or user not found";
        res.status(400).end(JSON.stringify({ err }));
      }
    } else {
      err = "token not found";
      res.status(400).end(JSON.stringify({ err }));
    }
  } catch (error) {
    res.status(400).end(JSON.stringify({ error }));
  }
};

exports.postLogout = async (req, res) => {
  try {
    const token = req.body.accesstoken;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    if(token) {
      req.session.destroy(async () => {
        err = "çıkış başarılı";
        let token2 = await crypto.randomBytes(60).toString("hex");
        const user = await User.findOne({ token: token });
        
        user.token = token2;
        user.save();
        res.status(200).end(JSON.stringify({ err }));
      });
    } else {
      err = "token not found";
      res.status(400).end(JSON.stringify({ err }));
    }
  } catch (error) {
    res.status(400).end(JSON.stringify({ error }));
  }
};

exports.postRegisterPage = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Accept", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  try {
    let token2 = await crypto.randomBytes(60).toString("hex");
    //console.log(token2);
    const user = await User.create({
      name: req.body.name,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      role: "User",
      token: token2,
    });

    const userReq = {
      name: req.body.name,
      userName: req.body.userName,
      email: req.body.email,
      role: "User",
      token: token2,
    };
    res.status(201).end(JSON.stringify({ userReq }));
  } catch (error) {
    const ValidationErrors = validationResult(req);
    res.status(400).end(JSON.stringify({ error, ValidationErrors }));
  }
};
