const Order = require("../models/order");
const User = require("../models/user");
const Product = require("../models/product");

exports.postOrder = async (req, res) => {
  try {
    //console.log(req.body);
    //console.log(req.headers);
    const token = req.headers.token;
    if (token) {
      const user = await User.findOne({ token: token });
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Accept", "application/json");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      const reqOrder = {
        user: user._id,
        orderedItems: JSON.parse(req.body.items),
        address: req.body.address
      };
      console.log(reqOrder);
      const order = await Order.create(reqOrder);

      res.status(200).end(JSON.stringify({ createdOrder: order }));
    } else {
      err = "token  not found";
      res.status(400).end(JSON.stringify({ err }));
    }
  } catch (error) {

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    const reqOrder = {
      orderedItems: JSON.parse(req.body.items),
      address: req.body.address
    };
    console.log(reqOrder);
    err = "eksik veri mevcut";
    res.status(400).end(JSON.stringify({ error }));
  }
};


exports.getOrders = async (req, res) => {
  try{
    const token = req.headers.token;
    if (token) {
      const user = await User.findOne({ token: token });

      if(user && user.role == "Admin"){
        const order = await Order.find()
        .sort("-createdAt")
        .populate("user")
        .populate("orderedItems");
        //console.log(req.params.product_Slug);
        res.setHeader("Content-Type", "application/json");
        res.setHeader('Accept', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        
        res.status(200).end(JSON.stringify({order}));
      }else{
        err = "user not Admin or not found";
        res.status(400).end(JSON.stringify({ err }));
      }
    
    }else {
        err = "token  not found";
        res.status(400).end(JSON.stringify({ err }));
      }
  } catch (error) {

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Accept", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    
    err = "eksik veri mevcut";
    res.status(400).end(JSON.stringify({ error:err }));
  }
 
};
