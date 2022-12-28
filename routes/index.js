var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('*', (req, res) => {
  console.log(req.path)
  if (req.path != '/home') {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  } else {
    res.redirect('/');
  }
  // res.redirect('/');
});

module.exports = router;