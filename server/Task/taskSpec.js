const app = require('../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('task', function () {
  it('it should Add task', function (done) {
    request(app)
    .post('/api/addTask/')
    .send({
      taskName: 'some task',
      completed: true,
      description : 'anything',
      updated : '1-1-2018',
      assignTo : 'someone'
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

  it('it should Get task', function (done) {
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
