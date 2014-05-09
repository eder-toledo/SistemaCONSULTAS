/**
 * Created by eder on 8/05/14.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('Responde a la ruta demo');
});

module.exports = router;