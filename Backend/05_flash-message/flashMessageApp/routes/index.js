var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.flash("age", 28);
  res.render('index', { title: 'Flash-message' });
});

router.get('/flashmessage', (req, res) => {
  console.log(req.flash("age"));
  res.send("Check console!")
})

module.exports = router;
