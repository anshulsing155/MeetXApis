const express = require('express');
const { getActivities, createActivity } = require('../controllers/activityController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', getActivities);
router.post('/', protect, createActivity); // Protected for testing purposes

module.exports = router;