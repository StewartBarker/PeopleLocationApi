const axios = require('axios');

module.exports = {
  index: (req, res) => {
    axios.get('https://bpdts-test-app.herokuapp.com/users').then((resp) => {
      res.json(resp.data);
    });
  },
};
