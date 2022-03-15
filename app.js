const express = require('express');
const router = require('./routes/locationRoutes');
// const bpdtsService = require('./services/bpdtsService');

const app = express();

const port = process.env.PORT || 3000;

app.use('/', router);

// app.get('/', (req, res) => {
//   res.send(bpdtsService);
// });

app.listen(port, () => {
  console.log(`Runnning on port: ${port}`);
});
