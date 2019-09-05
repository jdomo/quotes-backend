const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  analysis: {type: Schema.Types.Mixed, required: true},
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
})

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;