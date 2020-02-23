var express = require('express');
var router = express.Router();

/* GET tryIt */
router.get('/tryIt', function(req, res, next) {
  res.render('tryIt');
  next();
});

module.exports = router;
