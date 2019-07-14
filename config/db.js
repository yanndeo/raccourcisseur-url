const mongoose = require('mongoose');
const config = require('config');




const db = config.get("mongoURI"); //config.mongoURI;    
const connectDB = async() =>{

    try {
        await mongoose.connect(db , {
            useNewUrlParser: true
        });
        console.log('>>>>>>>> Database Connected')
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}


module.exports = connectDB;