const bpdtsService = require('../services/bpdtsService');
const geoLocationService = require('../services/geoLocationService');

module.exports = {
  get: async (req, res) => {
    try {
      const users = await bpdtsService.getUsers();

      const london = { latitude: 51.509865, longitude: -0.118092 };

      const usersWithin50MiesOfLondon = geoLocationService
        .getUsersWithinXMileOfLocation(users, 50, london);

      const usersInLondon = await bpdtsService.getUsersInCity('London');

      const allDistinctUsersInLondonOrWithin50MilesOfLondon = [...new Set([...usersWithin50MiesOfLondon, ...usersInLondon])];

      const removedIpAndEmailForSecurityReasons = allDistinctUsersInLondonOrWithin50MilesOfLondon.map(({ email, ip_address, ...rest }) => rest);

      res.status(200);
      return res.send(removedIpAndEmailForSecurityReasons);
    }
    catch (error) {
      return res.status(500).send(error);
    }
  },
};
