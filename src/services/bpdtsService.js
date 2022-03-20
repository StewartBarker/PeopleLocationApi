const axios = require('axios');

async function getUsers() {
  try {
    const res = await axios.get('https://bpdts-test-app.herokuapp.com/users');
    return res.data;
  } catch (error) {
    return error.response.status;
  }
}

async function getUsersInCity(city) {
  try {
    const res = await axios.get(`https://bpdts-test-app.herokuapp.com/city/${city}/users`);
    return res.data;
  } catch (error) {
    return error.response.status;
  }
}

module.exports = {
  getUsers,
  getUsersInCity,
};
