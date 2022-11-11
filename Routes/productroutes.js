const express = require('express');
const Router = express.Router();

const { 
    ProductData,
  
 }= require('../controller/productManagementcontroller')

 const {UploadProductImage}= require('../middleware/UploadMedia');

 Router.post('/ProductData',UploadProductImage.array('images',20),ProductData)

 module.exports = Router;