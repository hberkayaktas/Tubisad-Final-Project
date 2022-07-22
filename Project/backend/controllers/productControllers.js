const Product = require("../models/product");

exports.getAllProduct = async (req, res) => {
  const page = req.query.page || 1;
  const productPerPage = 3;

  const totalProducts = await Product.find({}).countDocuments();
  const products = await Product.find({}).sort("-dateCreated")
  .skip((page - 1) * productPerPage)
  .limit(productPerPage);

  res.setHeader("Content-Type", "application/json");
  res.setHeader('Accept', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  res.status(200).end(JSON.stringify({products}));
};


exports.getProduct = async (req, res) => {
  const product = await Product.findOne({slug : req.params.product_Slug});
  //console.log(req.params.product_Slug);
  res.setHeader("Content-Type", "application/json");
  res.setHeader('Accept', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  res.status(200).end(JSON.stringify({product}));
};

exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.product_Id);
  //console.log(req.params.product_Slug);
  res.setHeader("Content-Type", "application/json");
  res.setHeader('Accept', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  res.status(200).end(JSON.stringify({product}));
};
exports.postAddProduct = async (req, res) => {
  try {
    const product =  await Product.create(req.body);
    res.setHeader("Content-Type", "application/json");
    res.setHeader('Accept', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.status(200).end(JSON.stringify({createdProduct: product}));
   
  } catch (error) {
    res.json({ error: error, yollananVeri: req.body });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ status:"ok"});
  } catch (error) {
    res.json({ error: error });
  }
};

exports.updateProduct = async(req,res) =>{
  try{
    const product = await Product.findOne({ _id: req.params.id });
    product.productName = req.body.productName;
    product.productImage = req.body.productImage;
    product.productDescription = req.body.productDescription;
    product.releaseDate = req.body.releaseDate;
    product.productPrice = req.body.productPrice;
    product.save();
    
    res.json({ updatedProduct: product });
  }catch(error){
    res.json({ error: error });
  }
}
