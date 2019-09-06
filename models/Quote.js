const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  analysis: {type: [], required: true},
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }]
})

const Quote = mongoose.model('quote', QuoteSchema);

module.exports = Quote;