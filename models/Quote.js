const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  analysis: [{name: String, score: Number}],
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
})

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;