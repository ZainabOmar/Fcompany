const app = require('../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('signin', function () {
  it('it should sign in', function (done) {
    request(app)
    .post('/api/user/signin/')
    .send({
      username: 'zainab',
      password: '123'
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      expect(resp.body).to.be.an('object')
      done()
    })
  })
});

describe('signup', function() {
  it('it should sign up as admin', function (done) {
    request(app)
    .post('/api/user/signup/')
    .send({
      username: 'zainab',
      password: '123',
      email: 'zainab.hammami.zh@gmail.com',
      code: 'J@94O750KR78SQ54\\C73',
      job: 'CEO'
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      expect(resp.body).to.be.an('object')
    })
    done()
  })

  it('Should sign up as employee', function (done) {
    request(app)
    .post('/api/user/signup/')
    .send({
      username: 'zainab',
      password: '123',
      email: 'zainab.hammami.zh@gmail.com',
      code: 'J@94O750KR78SQ54\\C73',
      job: 'CEO'
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      expect(resp.body).to.be.an('object')
    })
    done()
  })
});

