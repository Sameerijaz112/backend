const express = require('express');
const app = express();
const loadMyvariable=require('./Configiration/LoadmyEnviroment')
const PORT = process.env.PORT;



app.listen(PORT,() =>{
console.log(`Your Application is Launched ${PORT}`)
console.log(process.env.PORT);
})