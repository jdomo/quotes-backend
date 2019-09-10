const mongoose = require('mongoose');

//ability to grab connection string inside default.json
// const config = require('config');
// const db = config.get('mongoURI'); //refers to connection string in default.json

require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      //gets rid of deprecation warnings
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log('mongo connected');
  } catch(err) {
    console.log('Error:', err);
  }
}

module.exports = connectDB