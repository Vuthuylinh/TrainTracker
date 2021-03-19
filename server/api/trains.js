const router = require('express').Router()

// matches GET requests to /api/trains/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/trains/
router.post('/', function (req, res, next) { /* etc */});

module.exports = router;
