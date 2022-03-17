const distanceCalculator = require('../utils/distanceCalculator');

function getUsersWithinXMileOfLocation(users, miles, location) {
  const usersWithinLocation = [];
  for (let i = 0; i < users.length; i += 1) {
    if (distanceCalculator.calculateDistanceUsingHaversine(
      users[i].latitude,
      users[i].longitude,
      location.latitude,
      location.longitude,
    ) < miles) {
      usersWithinLocation.push(users[i]);
    }
  }

  return usersWithinLocation;
}

module.exports = {
  getUsersWithinXMileOfLocation,
};
