var express = require("express");
var router = express.Router();

/* GET feautures */
router.get('/creators', function(req, res, next) {
    res.render('creators');
    next();
});

module.exports = router;