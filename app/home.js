const express = require('express');
const router = express.Router();
const HomeController = require('./home-controller');
router.get('/hai', HomeController.index);

module.exports = router;