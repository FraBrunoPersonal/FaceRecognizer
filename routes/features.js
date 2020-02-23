var express = require("express");
var router = express.Router();

/* GET feautures */
router.get('/features', function(req, res, next) {
    res.render('features');
});

module.exports = router;