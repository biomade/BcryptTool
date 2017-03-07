//router.js file to handle all routes

var path = require('path');
var HomeController = require(path.join(global.appRoot, 'controllers/HomeController'));
var BcryptController = require(path.join(global.appRoot, 'controllers/BcryptController'));
// Routes
module.exports = function(app){

    // Main Routes
    app.get('/', HomeController.Index);
    app.get('/index', HomeController.Index);

    //Bcrypt
    app.get('/bcrypt', BcryptController.Index);
    app.get('/bcrypt/', BcryptController.Index);

    //display the empty form
    app.get('/bcrypt/encrypt', BcryptController.EncryptShow);
    //submit the data and show the results
    app.post('/bcrypt/encrypt', function(req,res, next){
    	BcryptController.EncryptWord(req,res)
    });

    //display the empty form
    app.get('/bcrypt/validate', BcryptController.ValidateShow);
    //submit the data and show the results
    app.post('/bcrypt/validate', function(req,res, next){
      BcryptController.ValidateWord(req,res)
    });


    // // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      var err = new Error('Sorry, but that Page was Not Found');
      err.status = 404;
      next(err);
    });
};
