//  const { Router } = require('express');
// const express = require('express');
// const { postTestingData } = require('../controller/Testingcontroller');
//  const router = express.Router(); 
//  router.post('/postTestingData',postTestingData)

//  module.exports = Router;
const express = require('express')
const Router=express.Router()




const {postTestingData,getdatatesting}=require('../controller/Testingcontroller')
Router.post('/formApi',postTestingData)
Router.post('/GetData',getdatatesting)






module.exports=Router








// let array=['asdasdas','asdasdasda',]
// let [,alizain]=array