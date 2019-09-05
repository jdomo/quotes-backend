const express = require('express');
const router = express.Router();

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  iam_apikey: 'yEYuRPcdpuhyx4p8bX7viCk4KYOKq3seO2HTW0uFm9xt'
})

const text = "Don't judge each day by the harvest you reap but by the seeds that you plant. An API is only as good as its documentation.";

router.post('/analyze', (req, res) => {
  const toneParams = {
    tone_input: { 'text': text },
    content_type: 'application/json',
  };
  console.log(req.body)
  // const toneParams = {
  //   tone_input: { 'text': req.body.quoteText},
  //   content_type: 'application/json',
  // };
  
  toneAnalyzer.tone(toneParams)
  .then(response => {
    const data = [];

    response.document_tone.tones.map((item, index) => {
      data.push({name: item.tone_name, score: item.score})
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
