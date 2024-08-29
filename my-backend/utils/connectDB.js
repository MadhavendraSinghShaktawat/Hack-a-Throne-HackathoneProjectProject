// password: 
// usr: marvelcomicuniverse123
const mongoose = require("mongoose");
const connectDB = async() =>{
    try {
        const conn = await mongoose.connect('mongodb+srv://marvelcomicuniverse123:2y3KwUj3RpME1XtW@hack-a-throne-data.692du.mongodb.net/hack-a-throne-data?retryWrites=true&w=majority&appName=hack-a-throne-data');
        console.log(`Mongodb connect ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;