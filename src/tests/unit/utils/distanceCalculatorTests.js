const should = require('should');
const distanceCalculator = require('../../../utils/distanceCalculator');

describe('Distance calculator tests:', () => {
  describe('calculateDistanceUsingHaversine', () => {
    it('should give correct distance with given location', () => {
      var result = distanceCalculator.calculateDistanceUsingHaversine(45,0,-45,180);

      result.should.equal(12436.936997031273);
    })
  })
})