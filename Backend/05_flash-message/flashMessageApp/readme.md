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