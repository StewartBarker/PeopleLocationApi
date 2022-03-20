const locationController = require('../../../controllers/locationController');
const supertest = require('supertest');
const app = require('../../../app');

describe('Location Controller Tests:', () => {
  after(function (done) {
    app.close(done)
  })
  describe('Get', () => {
    it('should return 200 response', (done) => {
      supertest(app)
        .get('/api/v1/getUsersLivingInOrWithin50MilesOfLondon')
        .expect(200)        
        .end((err, res) => {
          if (err) throw done(err);
          done();
        })
    })
  })
})
