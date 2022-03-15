const router = require('express').Router();
const locationController = require('../controllers/locationController');

router.get('/getUsersWithinMilesOfCity', locationController.index);

module.exports = router;
