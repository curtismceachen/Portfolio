var express = require('express');
var router = express.Router();
let skillsDB = require('../models/skill')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titles: 'Portfolio', skills: skillsDB.getAll() });
});

module.exports = router;
