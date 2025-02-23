Prisma:
    - Prisma is an ORM(Object Relational Mapper).
    - It works with SQL databases like MySQL, PostgreSQL, SQLite, and SQL Server.
    
Mongoose:
    - Mongoose is an ODM(Object Data Modelling).
    - Since MongoDB is a NoSQL database, Mongoose helps you structure your documents and interact with the database using an object-oriented approach.

-Note: Prisma is more focused on type safety and works better with TypeScript compared to Mongoose.

- To check your port is open for running your application and not occupied by any other source the run the below command in cmd:
    netstat -ano | findstr :3001


app.use: 
    It's a middleware between your routes and your routes will not work if the next function hasn't call inside 'use' method.
    // app.use((req, res, next) => {
            next()
        })


req.params.username:
    To access the value from the route url.
    // app.get("/profile/:username", (req, res) => {
        res.send(`Hello from ${req.params.username}`)
        })


Setting up EJS:
    1. ejs install: npm i ejs
    2. configure ejs: app.set("view engine", "ejs");
    3. make "views" folder
    4. make .ejs files inside "views" folder
    5. in place of res.send() use res.render()
    6. inside res.render() you have to declare filename from the views folder but only write the file name without the extension. Skip .ejs extension keyword.