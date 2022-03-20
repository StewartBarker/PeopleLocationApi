const express = require('express');
const router = require('./routes/locationRoutes');

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

const app = express();

const port = process.env.PORT || 3000;

app.use('/api/v1', router);
app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);


const server = app.listen(port, () => {
  console.log(`Runnning on port: ${port}`);
});

module.exports = server;