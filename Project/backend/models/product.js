const mongoose = require("mongoose");
const slugify = require('slugify');
const Schema = mongoose.Schema;

// Tablo oluşturma
const productShema = new Schema({
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: [String],
  productPrice: {
    type: Number,
    required: true,
  },
  slug:{
    type:String,
    unique:true
  },
  releaseDate: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});
productShema.pre('validate', function(next){
  this.slug = slugify(this.productName, {
        lower:true,
        strict:true
  })
  next();
})
const Product = mongoose.model("Product", productShema);
//                            burada photo collections ismi

module.exports = Product;
