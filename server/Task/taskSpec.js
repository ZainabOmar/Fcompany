const app = require('../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('task', function () {
  it('Add task', function (done) {
    request(app)
    .post('/api/addTask/')
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

  it('Get task', function (done) {
    request(app)
    .get('/api/getTask/')
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
