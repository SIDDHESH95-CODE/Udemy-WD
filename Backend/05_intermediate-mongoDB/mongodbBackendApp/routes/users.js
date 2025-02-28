var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/randomusers");


const userModel = mongoose.Schema({
  username: String,
  email: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("users", userModel);


