var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('api endpoint', {
        title: 'api endpoint'
    });
});


module.exports = router;