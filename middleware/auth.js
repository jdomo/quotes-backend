const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token'); //header key in which to send token
  if (!token) res.status(401).json({message: 'access denied'})
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    console.log('decoded object: ', decoded)
    req.user = decoded;

    console.log(req.user, '<-- req.user');

    next();
  } catch(err) {
    res.status(401).json({message: 'invalid token'})
  }
}
