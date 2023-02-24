const jobsheetController = require('../Controllers/jobsheet');
const router = require('express').Router();

router.post('/one', jobsheetController.submitONe);

module.exports = router;