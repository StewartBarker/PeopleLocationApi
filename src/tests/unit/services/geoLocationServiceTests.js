const should = require('should');
const geoLocationService = require('../../../services/geoLocationService');

describe('Geo location service tests:', () => {
  describe('getUsersWithinXMileOfLocation', () => {
    it('should return user if within threshold', () => {
        const users = [{
            latitude: 1,
            longitude: 1,            
        }]

        const location = {
            latitude: 1.01,
            longitude: 1.01,  
        }

        const miles = 20;

        var result = geoLocationService.getUsersWithinXMileOfLocation(
            users, miles, location
        );

        result.length.should.equal(1);
        result.should.be.eql(users);
    });
    it('should not return user if not within threshold', () => {
        const users = [{
            latitude: 1,
            longitude: 1,            
        }]

        const location = {
            latitude: 2,
            longitude: 2,  
        }

        const miles = 1;

        var result = geoLocationService.getUsersWithinXMileOfLocation(
            users, miles, location
        );

        result.length.should.equal(0);
    })
  })
})