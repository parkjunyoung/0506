var express = require('express');
var router = express.Router();
var PostModel = require('../models/PostModel');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

module.exports = router;
