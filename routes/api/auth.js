const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

require('dotenv').config();

//test / auth GET
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')   //.select(-'<property to omit>') -- gets rid of password in returned user
    console.log(user, '<-- user in auth get');
    res.json(user);
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
})

//login / auth POST
router.post('/', 
[
  check('email', 'User did not enter valid email').isEmail(),
  check('password', 'Password required').exists()
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //400 - bad request
    res.status(400).json({ errors: errors.array() })
  }

  try {
    let user = await User.findOne({email: req.body.email});

    if (!user) {
      res.status(400).json({message: 'Invalid credentials'})      
    }
    
    //use bcrypt compare method to compare hashed password to plain text password - returns boolean
    const isMatch = await bcrypt.compare(req.body.password, user.password)

    if (!isMatch) res.status(400).json({message: 'Invalid credentials'}) 

    const payload = {id: user.id}   //mongo: _id, mongoose uses abstraction so we can access w/o underscore

    //sign web token - step one of JWT process
    jwt.sign(
      payload, 
      process.env.JWT_SECRET,       //from config/default.json
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