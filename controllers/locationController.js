const bpdtsService = require('../services/bpdtsService');
const geoLocationService = require('../services/geoLocationService');

module.exports = {
  index: async (req, res) => {
    const users = await bpdtsService.getUsers();

    const london = { latitude: 50, longitude: 30 };

    const usersWithinLocation = geoLocationService.getUsersWithinXMileOfLocation(users, 50, london);

    console.log(usersWithinLocation);
    const usersInCity = await bpdtsService.getUsersInCity('London');
    console.log(usersInCity);
    return res.send(usersInCity);
  },
};
