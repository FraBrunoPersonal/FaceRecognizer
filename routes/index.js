var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET creators */
router.get('/creators', function(req, res) {
  res.render('creators');
});

/* GET feautures */
router.get('/features', function(req, res) {
  res.render('features');
});

/* GET tryIt */
router.get('/tryIt', function(req, res) {
  res.render('tryIt');
});

/* GET news */
router.get('/news', function(req, res) {
  res.render('news');
});

module.exports = router;
