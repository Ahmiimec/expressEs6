import express from 'express';

import * as healthCheck from '../controllers/health/healthCheck';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/ping', healthCheck.ping);

module.exports = router;
