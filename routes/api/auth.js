const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const User = require('../../models/User')

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

module.exports = router;