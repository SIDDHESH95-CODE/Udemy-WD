var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  req.flash("age", 29);
  res.send("Flash message created")
});

router.get('/message', function(req, res) {
  console.log(req.flash("age"));
  res.send("check console")
});

module.exports = router;
