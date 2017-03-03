var path = require('path');
var bcrypt = require('bcrypt');
var encryption = require(path.join(global.appRoot, 'models/encryption.js'));

//BcryptController.js for the pages in the views bcrypt directory
exports.Index = function(request, response){
    response.render('bcrypt/index',
  	 {title: 'Bcrypt Tools'});
};

exports.EncryptShow = function(request, response){
   var e = new encryption();

    //DONE: Add code to pass back an empty json object
   response.render('bcrypt/encrypt', {
    title: 'Welcome to the Bcrypt - Encryption page',
     encryption: e
    });
};

exports.EncryptWord = function(request, response){
  //get the data from the form
  //time to use bcrypt!!
  var e = new encryption();
  //is the req.body a json object?
  e.saltrounds = parseInt(request.body.saltrounds, 10);
  e.rawtext = request.body.rawtext;
  var salt = bcrypt.genSaltSync(e.saltrounds);
  e.encryptedword = bcrypt.hashSync(e.rawtext, salt);
  response.render('bcrypt/encrypt', {
    title: 'Welcome to the Bcrypt - Encryption page results',
    encryption: e
	});
};

exports.ValidateShow = function(request, response){
    response.render('bcrypt/validate',
  	{title: 'Welcome to the Bcrypt - Validation page'});
};

exports.ValidateWord = function(request, response){
  //get the data from the form
  //time to use bcrypt!!
  var e = new encryption();
  //is the req.body a json object?
  e.rawtext = request.body.rawtext;
  e.encryptedword = request.body.encryptedword
  bcrypt.compare(request.body.rawtext, request.body.encryptedword, function(err, isMatch) {
    if(err) {
            return console.error(err);
    }
    console.log('inside do they match?', isMatch);
    response.render('bcrypt/validate', {
      title: 'Welcome to the Bcrypt - Validation page results',
      encryption: e,
      msg: isMatch
  	});
  });


};
