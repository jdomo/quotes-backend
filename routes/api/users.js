const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')

const User = require('../../models/User')

router.post('/', 
[
  check('email', 'User did not enter valid email').isEmail(),
  check('password', 'User did not enter valid password').not().isEmpty()
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //400 - bad request
    res.status(400).json({ errors: errors.array() })
  }
  console.log(req.body)

  try {
    let user = await User.findOne({email: req.body.email});

    if (user) {
      res.status(400).json({message: 'User already exists'})      
    }

    user = new User({email: req.body.email});

    const salt = await bcrypt.genSalt(10);

    //add hashed password to user instance
    user.password = await bcrypt.hash(req.body.password, salt); 

    await user.save();

    res.send('Successfully registered user');
  } catch (err) {
    console.log('Error in users route: ', err.message)
  }
})

module.exports = router;