const express = require('express');
const Router = express.Router();

const { 
    ProductData, GetProductData,
  
 }= require('../controller/productManagementcontroller')

 const {UploadProductImage}= require('../middleware/UploadMedia');

 Router.post('/ProductData',UploadProductImage.array('images',20),ProductData)
 Router.get('/Getproduct',GetProductData )

 module.exports = Router;