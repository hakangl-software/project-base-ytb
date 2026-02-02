var express = require('express');
const config = require('../config'); // normalde '../config/index.js' tir. Ancak bu şekilde yazınca da otomatik index dosyasına gidiyor
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hakan', config });
});

module.exports = router;
