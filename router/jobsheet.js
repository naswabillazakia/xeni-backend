const jobsheetController = require('../Controllers/jobsheet');
const router = require('express').Router();

router.post('/one', jobsheetController.submitOne);

module.exports = router;