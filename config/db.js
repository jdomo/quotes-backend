const mongoose = require('mongoose');

//ability to grab connection string inside default.json
const config = require('config');
const db = config.get('mongoURI'); //refers to connection string in default.json

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      //gets rid of deprecation warning
      useNewUrlParser: true
    });
    console.log('mongo connected');
  } catch(err) {
    console.log('Error:', err);
  }
}

module.exports = connectDB