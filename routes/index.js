const express = require('express');
const router = express.Router();
const claimRoutes = require('../routes/claim.routes');

router.use('/uploads/', express.static('./uploads'));
router.use('/claims/', claimRoutes);

module.exports = router;