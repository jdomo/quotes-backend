const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  quotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'quotes'
  }]
})

const User = mongoose.model('user', UserSchema);

module.exports = User;
//crud-app-sketch