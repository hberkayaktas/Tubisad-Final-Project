const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Tablo oluşturma
const orderShema = new Schema({
  address: {
    type: String,
    required: true,
  },
  user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
      },
  orderedItems: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Product'
      }],

  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderShema);
//                            burada photo collections ismi

module.exports = Order;
