const express = require('express');
const router = express.Router();
const claimRoutes = require('../routes/claim.routes');
const courseRoutes = require('../routes/course.routes');
const userRoutes = require('../routes/user.routes');

router.use('/uploads/', express.static('./uploads'));
router.use('/claim/', claimRoutes);
router.use('/course/', courseRoutes);
router.use('/user/', userRoutes);

module.exports = router;