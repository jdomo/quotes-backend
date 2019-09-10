const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const {check, validationResult} = require('express-validator');
const Quote = require('../../models/Quote')
const User = require('../../models/User')

//access environment variables
require('dotenv').config();

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  iam_apikey: process.env.IBM_API_KEY
})

router.post('/analyze', (req, res) => {
  console.log(req.body, '<-- req.body in analyze post')
  const toneParams = {
    tone_input: { 'text': req.body.quote },
    content_type: 'application/json',
  };
  
  toneAnalyzer.tone(toneParams)
  .then(response => {
    const data = [];

    response.document_tone.tones.map((item) => {
      data.push({name: item.tone_name, score: item.score})
    })
    
    res.json({
      data: data
    })
  })
})

router.get('/me', auth, async (req, res) => {
  try {
    //find quote by user
    const quote = await Quote.findOne({ user: req.user.id }).populate('user', ['email']);

    if (!quote) res.status(400).json({message: 'No quotes found for this user.'})

    res.json({quote: quote})

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})

module.exports = router;
