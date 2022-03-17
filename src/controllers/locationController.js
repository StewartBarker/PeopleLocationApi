const bpdtsService = require('../services/bpdtsService');
const geoLocationService = require('../services/geoLocationService');

module.exports = {
  index: async (req, res) => {
    const users = await bpdtsService.getUsers();

    const london = { latitude: 51.509865, longitude: -0.118092 };

    const usersWithin50MiesOfLondon = geoLocationService
      .getUsersWithinXMileOfLocation(users, 50, london);

    console.log(usersWithin50MiesOfLondon);
    const usersInLondon = await bpdtsService.getUsersInCity('London');
    console.log(usersInLondon);
    const allUsersWithin50MilesOfLondon = usersWithin50MiesOfLondon.concat(usersInLondon);

    return res.send(allUsersWithin50MilesOfLondon);
  },
};
