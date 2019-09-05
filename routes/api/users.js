const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')

router.post('/', 
[
  check('email', 'User did not enter valid email').isEmail(),
  check('password', 'User did not enter valid password').not().isEmpty()
],
(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //400 - bad request
    res.status(400).json({ errors: errors.array() })
  }
  console.log(req.body)
  res.send('User route');
})

module.exports = router;