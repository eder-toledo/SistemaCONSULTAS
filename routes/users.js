var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('Responde a la ruta users');
});

module.exports = router;
