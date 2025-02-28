Steps:
    - Create app with EJS:
        express "appName" --view=ejs
    - Install mongoose:
        npm i mongoose
    - Setup mongoose:
        const mongoose = require('mongoose');
        mongoose.connect("mongodb://127.0.0.1:27017/dbname");
    - Make schema:
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
        });
    - Make a route to create a user as per the schema.
        e.g. router.get("/create", async(req, res) => {
                let createUser = await userModel.create({
                    username: "Sidd",
                    email: "sidd@gmail.com",
                    description: "I am athlete, love to play outdoor games.",
                    categories: ["traveling", "eating", "playing", "running", ]
                })
                res.send(createUser);
            })
    - CASE INSENSITIVE means that something is not concerned with whether letters are uppercase or lowercase.
        To find the case-insensitive user, RegEx(regular expression) comes to the play:
            new RegExp({"username", "i"})       // i is state as "insensitive".
                e.g. router.get("/find", async (req, res) => {
                        let regexValue = new RegExp("^siddhant$", "i");
                        const foundUser = await userModel.find({username: regexValue})
                        res.send(foundUser);
                    })
                    Note: ^ symbol means start.
                          $ symbol means end.
                          e.g. "^siddhant$"


Questions:
    1. How can I perform a case-insensitive search in mongoose?
    2. How do I find documents where an array field contains all of a set of    its values?
    3. How can I search for a document for a specific date range in mongoose?
    4. How can I filter documents based on existence of a field in mongoose?
    5. How can I filter documents based on a specific field's length in mongoose?
