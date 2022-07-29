var express = require('express');
var router = express.Router();
let projectsDB = require('../models/project')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titles: 'Portfolio', projects: projectsDB.getAll() });
});

module.exports = router;
