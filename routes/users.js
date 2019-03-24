var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.render('user', { title: 'You\'re so cool' });
  //res.end(1);
});

module.exports = router;
