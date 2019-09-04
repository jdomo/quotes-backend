const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//default endpoint
app.get('/', (req, res) => {
  res.send('this gonna be a dope quote apppppp');
})

//listener
app.listen(PORT, () => {
  console.log(`it\'s lit on ${PORT}`);
})