const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
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

    //add user-entered email to User instance
    user = new User({email: req.body.email});

    //determine encryption level for password hash
    const salt = await bcrypt.genSalt(10);

    //add hashed password to User instance
    user.password = await bcrypt.hash(req.body.password, salt); 

    //save user instance in db
    await user.save();
    
    const payload = {id: user.id}   //mongo: _id, mongoose uses abstraction so we can access w/o underscore

    //sign web token - step one of JWT process
    jwt.sign(
      payload, 
      config.get('jwtSecret'),       //from config/default.json
      {expiresIn: 360000},          //sets expiry time for token. optional - 3600 is norm (one hour)
      (err, token) => {
        if (err) throw err;
        res.json({ token: token });    //include token in response
      }
    );
  } catch (err) {
    console.log('Error in users route: ', err.message)
  }
})

module.exports = router;