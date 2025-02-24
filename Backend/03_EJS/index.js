// const express = require('express');
import express from 'express';

const app = express();
const port = 3000;


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("This is learning of EJS");
})

app.get("/ejs", (req, res) => {
    res.render("index");
})

app.get("/cart", (req, res) => {
    res.render("carts");
})

app.get("/contact", (req, res) => {
    res.render("contact", {name: "Siddhesh"});
})



app.listen(port, () => {
    console.log(`Your application is listening on port: ${port}`);
})