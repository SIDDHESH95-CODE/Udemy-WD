var express = require('express');
var router = express.Router();
var userModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.ban = true;
  res.render('index', { title: 'MongoDB' });
});


/* CRUD IN MONGODB: */

// CREATE:
router.get('/users', async (req, res) => {
  // data creation in db as per the schema:
  // userModel.create({}) is an async fn always.
  const users = await userModel.create({
    username: "john",
    age: 23,
    email: "john@email.com"
  }, {
    username: "siddhesh",
    age: 28,
    email: "siddhesh@MediaList.com"
  })
  res.send(users);
})

// READ:
router.get("/allusers", async (req, res) => {
  // To find all user data or find some user data:
  const manageUsers = await userModel.find();
  res.send(manageUsers);
})

router.get("/finduser", async (req, res) => {
  // To find all user data or find some user data:
  const oneUser = await userModel.findOne({username: "siddhesh"});
  res.send(oneUser);
})

// DELETE:
router.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({username: "john"});
  res.send(deletedUser);
})

// create session memory on the server:
/* req.session.ban = true;  // create on the "/" page. */

router.get("/checkban", (req, res) => {
  // console.log(req.session);
  if (req.session.ban) res.send("You are banned")
    else res.send("You are not banned")
})

// delete created session memory from the server:
router.get("/removeban", (req, res) =>{
  req.session.destroy(function(err) {
    if (err) throw err;
    res.send("ban removed")
  })
})

module.exports = router;
