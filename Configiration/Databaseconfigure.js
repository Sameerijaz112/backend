const package = require('../package.json');
const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URI}`, {useNewUrlparsel:true,useuniFiedTopology:true});

(error,connection) => {
if (!error) {
    console.log(`\nMONGODB CONNECT SUCCESSFULLY WITH MOGOATLAST`);
    console.log(`Your app  has the following dependicies`);

    
} else {
    console.log('ERROR; Not connected to the MongoDB '+Error)
}
}