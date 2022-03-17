const express = require('express');
const router = require('./routes/locationRoutes');

const app = express();

const port = process.env.PORT || 3000;

app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`Runnning on port: ${port}`);
});
