var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
  res.render('index', { title: 'Quantic Dream | Интерактивные истории', isHome: true });
});

module.exports = router;
