// common js:
// const express = require('express');

// module js:
import express from 'express';

const app = express();

const port = 8000;

/* app.use((req, res, next) => {
    next()
}) */


app.get("/", (req, res) => {
    res.send("Welcome to my Express Learning...")
})

app.get("/profile", (req, res) => {
    res.send("Hello from profile")
})
app.get("/profile/:username", (req, res) => {
    res.send(`Hello from ${req.params.username}`)
})

app.get("/about", (req, res) => {
    res.send("Welcome to the about page of ExpressJS.")
})

app.get("/contact", (req, res) => {
    res.send("This is the page where you can contact me, so do it!")
})


// app.use(express.json());

app.listen(port, () => {
    console.log(`Your app is running on port: ${port}`);
})