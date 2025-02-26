Steps:
    - create app with ejs:
        express "app-name"
    - download & install mongoDB: 
        MongoDB Atlas
    - install mongoose:
        npm i mongoose
    - require mongoose and connection setup:
        const mongoose = require('mongoose');
        mongoose.connect("mongodb://127.0.0.1:27017/dbname");
    - make schema:
        mongoose.Schema({
            username: String,
            email: String,
            age: Number
        })
    - create model from mongoose and export:
        module.exports = mongoose.model("modelName", schemaName);

    