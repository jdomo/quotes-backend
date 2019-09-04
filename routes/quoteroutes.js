const express = require('express');
const router = express.Router();

const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  iam_apikey: 'yEYuRPcdpuhyx4p8bX7viCk4KYOKq3seO2HTW0uFm9xt'
})

const text = "Don't judge each day by the harvest you reap but by the seeds that you plant.";

const toneParams = {
  tone_input: { 'text': text },
  content_type: 'application/json',
};

toneAnalyzer.tone(toneParams).then(response => JSON.stringify(response))
.then(data => console.log(data));