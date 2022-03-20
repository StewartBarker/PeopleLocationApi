const should = require('should');
const sinon = require('sinon');
const locationController = require('../../../controllers/locationController');

describe('Location Controller Tests:', () => {
  describe('Get', () => {
    it('should return 200 response', () => {
      var result = locationController.get();
      result.should.equal(200);
    })
  })
})