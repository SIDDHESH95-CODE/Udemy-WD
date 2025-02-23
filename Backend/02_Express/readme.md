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