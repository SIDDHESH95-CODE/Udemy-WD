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

/* router.get("/find", async (req, res) => {
  let regexValue = new RegExp("^siddhant$", "i");
  const foundUser = await userModel.find({ username: regexValue })
  res.send(foundUser);
}) */

/* router.get("/finduser", async (req, res) => {
  let user = await userModel.find({ categories: { $all: ["traveling"] } })
  res.send(user);
}) */

/* router.get("/find", async (req, res) => {
  let startDate = new Date("2025-02-28"); 
  let endDate = new Date("2025-03-01"); 
  const dataByDate = await userModel.find({dateCreated: {$gte: startDate, $lte: endDate}});
  res.send(dataByDate);
}) */

/* router.get("/search", async (req, res) => {
  let categoryAvailable = await userModel.find({ email: { $exists: true } });
  res.send(categoryAvailable);
}) */

router.get("/searchbylen", async (req, res) => {
  let userByLen = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: "$email" }, 0] },
        { $lte: [{ $strLenCP: "$email" }, 17] }
      ]
    }
  })
  res.send(userByLen);
})

module.exports = router;
