const app = require('../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('food', function () {
  it('it should Add food', function (done) {
    request(app)
    .post('/api/food/add/')
    .send({
      dishName: 'chinese',
      type: 'chinese',
      foodtime: 'dinner'
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      expect(resp.body).to.be.an('object')
    })
    done()
  })

  it('it should Get food', function (done) {
    request(app)
    .get('/api/food/')
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
})
