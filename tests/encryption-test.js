//var describe  = require('mocha').describe;
//var it = require('mocha').it
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

//get the model
var encryption = require('../models/encryption.js');

//expect raw and hashed to be null, the salt to be 10
describe('encryption model', function() {
	  it('encryption.rawtext should return an empty string', function() {
	     var e = new encryption();
	    expect(e.rawtext).to.be.empty;
	  });

	  it('encryption.encryptedword should return an empty string', function() {
	     var e = new encryption();
	    expect(e.encryptedword).to.be.empty;
	  });

	  it('encryption.saltrounds should equal 10', function() {
	     var e = new encryption();
	    expect(e.saltrounds).to.equal('10');
	  });
  }); //end describe
