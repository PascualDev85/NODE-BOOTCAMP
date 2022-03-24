var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Buenas Tardes' });
  res.send('Primer método del index.js')
});

module.exports = router;
