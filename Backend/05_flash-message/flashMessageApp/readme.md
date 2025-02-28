Installation and setup connect flash:
    - create an express app with ejs
    - install connect-flash
        npm i connect-flash
    - install express-session because connect-flash only works after the express session setup is done.
    - app.use() always write before all the routes because app.use() should run before the home page load.
    - setup flash-message:
        inside app.js:
            const flash = require('connect-flash');
            app.use(flash());
            req.flash("messageName", value)
    
Note: Benefit of the connect-flash is that you can create flash message on any route and can use at any other router without installing external package.
Otherwise it wont possible to share data from one route to another in express app.