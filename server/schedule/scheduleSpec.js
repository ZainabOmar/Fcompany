const app = require('../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('schedule', function () {
  it('it should Add schedule', function (done) {
    request(app)
    .post('/api/schedule/add/')
    .send([{
     date: '21-3-2017',
     starttime: '2:30',
     endtime: '3:00',
     title: 'meeting',
     description: 'important'
   }])
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      expect(resp.body).to.be.an('array')
    })
    done()
  })

  it('it shoud Get schedule', function (done) {
    request(app)
    .get('/api/schedule/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      expect(resp.body).to.be.an('array')
    })
    done()
  })
})
