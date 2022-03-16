function convertDegreesToRadians(Value) {
  return Value * (Math.PI / 180);
}

function calculateDistanceUsingHaversine(lat1, lon1, lat2, lon2) {
  const earthRadiusInMiles = 3958.8;
  const latDifferenceInRadians = convertDegreesToRadians(lat2 - lat1);
  const lonDifferenceInRadians = convertDegreesToRadians(lon2 - lon1);

  const distance = 2 * earthRadiusInMiles * Math.asin(Math.sqrt(Math.sin(latDifferenceInRadians / 2)
    * Math.sin(latDifferenceInRadians / 2) + Math.cos(convertDegreesToRadians(lat1))
    * Math.cos(convertDegreesToRadians(lat2)) * Math.sin(lonDifferenceInRadians / 2)
    * Math.sin(lonDifferenceInRadians / 2)));
  return distance;
}

module.exports = {
  calculateDistanceUsingHaversine,
};
