const path = require('path');

const express = require('express');
const productsCOntroller = require('../controllers/products')

const router = express.Router();



router.get('/', productsCOntroller.getProducts )

router.get('/add-card',productsCOntroller.getAddCart ) 

router.get("/edit/:productId", productsCOntroller.getEditProduct);

router.post('/add-card',productsCOntroller.postAddCard )

router.post("/edit", productsCOntroller.postEditProduct);

router.post("/delete-product", productsCOntroller.postDeleteProduct);

module.exports = router