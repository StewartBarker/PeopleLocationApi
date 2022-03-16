function sourceLocationIsWithinXMilesOftargetLocation(
  sourceLocationLatitude,
  sourceLocationLongitude,
  miles,
  targetLocationLatitude,
  targetLocationLongitude,
) {
  return true;
}

function getUsersWithinXMileOfLocation(users, miles, location) {
  const usersWithinLocation = [];
  for (let i = 0; i < users.length; i += 1) {
    if (sourceLocationIsWithinXMilesOftargetLocation(
      users[i].latitude,
      users[i].longitude,
      miles,
      location.latitude,
      location.longitude,
    )
    ) {
      usersWithinLocation.push(users[i]);
    }
  }

  return usersWithinLocation;
}

module.exports = {
  getUsersWithinXMileOfLocation,
};
