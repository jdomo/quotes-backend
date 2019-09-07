const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const {check, validationResult} = require('express-validator');
const Quote = require('../../models/Quote')
const User = require('../../models/User')

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  iam_apikey: 'yEYuRPcdpuhyx4p8bX7viCk4KYOKq3seO2HTW0uFm9xt'
})


router.get('/me', auth, async (req, res) => {
  try {
    //find quote by 
    const quote = await Quote.findOne({ user: req.user.id }).populate('user', ['email']);

    if (!quote) res.status(400).json({message: 'No quotes found for this user.'})

    res.json({quote: quote})

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
})


router.post('/analyze', (req, res) => {
  console.log(req.body, '<-- req.body in analyze post')
  const text = req.body.quote;

  const toneParams = {
    tone_input: { 'text': text },
    content_type: 'application/json',
  };
  // console.log(req.body)
  // const toneParams = {
  //   tone_input: { 'text': req.body.quoteText},
  //   content_type: 'application/json',
  // };
  
  toneAnalyzer.tone(toneParams)
  .then(response => {
    const data = [];
    console.log(response)
    response.document_tone.tones.map((item, index) => {
      data.push({name: item.tone_name, score: item.score})
      console.log(data)
    })
    console.log(data, "<-- data array")
    res.json({
      data: data
    })
  })
})


//   response.sentences_tone.map(item => {
//     data.sentenceTones.push({
//       sentence_id: item.sentence_id, 
//       text: item.text, 
//       tones: item.tones.map(item => {
//         let obj = {};
//         obj.name = item.tone_name;
//         obj.score = item.score;
//         return obj
//       })})
//   })
//   return data;
// })
// .then(data => {
//   console.log(data, '<-- final data');
//   console.log(data.sentenceTones[0].tones, '<-- sentence tones');
//   console.log(data.sentenceTones[1].tones, '<-- sentence tones');
//   console.log(data.sentenceTones[2].tones, '<-- sentence tones');
// })

module.exports = router;
