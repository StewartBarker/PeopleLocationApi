const router = require('express').Router();
const locationController = require('../controllers/locationController');

router.get('/getUsersLivingInOrWithin50MilesOfLondon', locationController.get);

module.exports = router;
