const express = require('express');
const app = express();
const PORT = 2020;



app.listen(PORT,() =>{
console.log(`Your Application is Launched ${PORT}`)
console.log(process.env);
})