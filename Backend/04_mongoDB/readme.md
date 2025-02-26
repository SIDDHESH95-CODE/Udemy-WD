Steps:
    1. create app with ejs:
        express "app-name"
    2. download & install mongoDB: 
        MongoDB Atlas
    3. install mongoose:
        npm i mongoose
    4. require mongoose and connection setup:
        const mongoose = require('mongoose');
        mongoose.connect("mongodb://127.0.0.1:27017/dbname");
    5. make schema:
        mongoose.Schema({
            username: String,
            email: String,
            age: Number
        })
    6. create model from mongoose and export:
        module.exports = mongoose.model("modelName", schemaName);

Note: In DB language,
        One user data is called as document.
        All document makes a collection.
        And all collection are saved in a database.

Client:
    Cookie: 
        store data as a cookie in your local machine
        a bit risky because data can be manipulate

Server:
    Session:
        store data as a session on the server
        not that risky because data stored on the server24
    installation & setup:
        npm i express-session
        In the main app.js file:
            app.use(session({
                resave: false,  // if changes not done then it will resave
                saveUninitialized: false,   // uninitialized value will not save
                secret: "anythingButString" // secret key to identify
            }));
        session memory creation:
            req.session.anySessionMemoryName = anySessionMemoryValue;
        read session memory:
            req..session.sessionMemoryName;
        session memory deletion:
            req.session.destroy()