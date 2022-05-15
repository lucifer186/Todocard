const Product = require("../models/Product");
// const mongodb = require('mongodb')

exports.getAddCart = (req, res) => {
  // res.sendFile( path.join(__dirname,'../', 'views', 'card.html'))
  res.render("card", {
    path: "/add-card",
    editing: false,
  });
};

exports.postAddCard = (req, res) => {
  // res.sendFile( path.join(__dirname,'../', 'views', 'card.html'))
  const cardlist = req.body.cardlist
  const title = req.body.title;
  const description = req.body.description;
  const product = new Product({
    cardlist : cardlist,
    title: title,
    description: description,
  });

  product.save().then((result) => {
      console.log("created products");
    res.redirect("/");
  });
};

exports.getProducts = (req, res) => {
  // res.sendFile( path.join(__dirname,'../', 'views', 'items.html'))
  Product.find()
    .then((products) => {
        console.log(products);
      res.render("items", {
        prods: products,
        path: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("edit", {
        pageTitle: "Edit Product",
        path: "/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatecardList = req.body.cardlist;
  const updatedTitle = req.body.title;
  const updatedDesc = req.body.description;

  Product.findById(prodId).then((product) =>{
    product.cardlist = updatecardList;
  product.title = updatedTitle;
  product.description = updatedDesc;
  return product.save()
  }).then((result) => {
      console.log("UPDATED PRODUCT!");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log("DESTROYED PRODUCT");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
