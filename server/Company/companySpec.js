const app = require('../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('company', function () {
  it('Create company', function (done) {
    request(app)
    .post('/api/company/')
    .send({
      CompanyName: 'Heaven Comp',
      address: 'jordan',
      phoneNumber: '079123',
      code:'>X655J54;J61;966KP63',
      AdminId: '58d14338764bbe0e988b9c8d',
      Adminname: 'fatemah'
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

  it('Get company', function (done) {
    request(app)
    .get('/api/company/')
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
