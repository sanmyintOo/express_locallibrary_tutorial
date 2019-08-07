// wiki.js - Wiki route module

var express = require('express');
var router = express.Router();

// home page routes.
router.get('/', (req, res) => {
    res.send('Wiki home page');
});

// about page routes.
router.get('/about',(req,res) => {
    res.send('Wiki about page')
});

module.exports = router;