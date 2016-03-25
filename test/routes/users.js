'use strict';
var supertest = require('supertest');
var should = require('should');
var faker = require('faker');
var models = require('../../app/models');
var user;
var server = supertest.agent('http://localhost:3001');

describe('http://localhost:3001/users', () => {

  before((done) => {
    models.User.sync({ force : true })
      .then(() => {
        done(null);
      })
      .catch((error) => {
        done(error);
      });
    user = {
      account: faker.internet.userName(),
      password: faker.internet.password()
    };

  });

  it('GET /users', (done) => {
    server
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('POST /users', (done) => {
    server
      .post('/users')
      .send(user)
      .expect(200, {
        success: true,
        message: 'User created.'
      }, done);
  });

  it('GET /users/1', (done) => {
    server
      .get(`/users/${1}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        id: 1,
        account: user.account
      }, done);

  });
});
