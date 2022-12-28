var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('*', (req, res) => {
  console.log(req.path)
  if (req.originalUrl.includes('home')) {
    res.redirect('/');
  } else {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  }
  // res.redirect('/');
});

module.exports = router;