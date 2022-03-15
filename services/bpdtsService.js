const https = require('https');

const url = 'https://bpdts-test-app.herokuapp.com/';

module.exports = () => new Promise((resolve, reject) => {
  https.get(`${url}/users`, (response) => {
    try {
      let body = '';

      response.on('data', (data) => {
        body += data.toString();
      });
      response.on('end', () => {
        const { id, email } = JSON.parse(body);
        resolve({ lat: id, lon: email });
      });
    } catch (error) {
      reject(error);
    }
  });
});
