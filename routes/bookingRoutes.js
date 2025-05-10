const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All booking routes are protected
router.use(protect);

router.post('/', bookActivity);
router.get('/', getMyBookings);

module.exports = router;