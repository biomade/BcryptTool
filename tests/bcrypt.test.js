//testing the bcrypt module
var chai = require('chai');
var assert = chai.assert ; //cause we are doing tdd

//get the encryption object which is up one folder and in another
var encryption = require('./../models/encryption.js');
//first tests
describe('encrytion object tests', function(){
  //create an empty object
  var e = new encryption();
  it('encryption.rawtext should be empty', function(){
    assert.lengthOf(e.rawtext, 0, 'rawtext string has length of 0');
  });
  it('encryption.encryptedword should be empty', function(){
    assert.lengthOf(e.encryptedword, 0, 'encryptedword string has length of 0');
  });
  it('encryption.saltrounds should be 10', function(){
    assert.equal(10,e.saltrounds);
  });
});
//console.log("no tests yet");
