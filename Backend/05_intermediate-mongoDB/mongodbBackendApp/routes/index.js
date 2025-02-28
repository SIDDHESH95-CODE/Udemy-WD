var express = require('express');
var router = express.Router();

const userModel = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mongodb' });
});

router.get("/create", async (req, res) => {
  let createUser = await userModel.create({
    username: "Sidd",
    email: "sidd@gmail.com",
    description: "I am athlete, love to play outdoor games.",
    categories: ["traveling", "eating", "playing", "running",]
  })
  res.send(createUser);
})

router.get("/find", async (req, res) => {
  let regexValue = new RegExp("^siddhant$", "i");
  const foundUser = await userModel.find({ username: regexValue })
  res.send(foundUser);
})

module.exports = router;
