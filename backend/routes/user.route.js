const express = require('express');
const { registerUser, authUser, getUserProfile } = require('../controllers/user.controller');
const router = express.Router();
const {protect} = require('../midllewares/auth.middleware');

router.get('/', protect, getUserProfile);
router.post('/signup', registerUser);
router.post('/signin', authUser);

module.exports = router;
