const dotenv = require('dotenv');
let Myenviroment = {};
 if (process.env.NODE_ENV === 'testing') {
    Myenviroment =dotenv.config({path:`${__dirname}/../application-testing-enviroment.env`});
    if (process.env.NODE_ENV === 'development') {
        Myenviroment = dotenv.config({path:`${__dirname}/../application-development-enviroment.env`})
        
    };
    if (process.env.NODE_ENV === 'production') {
        Myenviroment = dotenv.config({path:`${__dirname}/../application-production-enviroment-env`})
        
    }
 }
 console.log(Myenviroment);