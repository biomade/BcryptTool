//testing the index
var request = require('supertest');
var app = require('../app');
var chai = require('chai');
var assert = chai.assert ; //cause we are doing tdd
describe('root index test', function(){
  it('Index Page Loads', function(done){
    request(app).get('/')
    .expect(200,done);
  });
});
