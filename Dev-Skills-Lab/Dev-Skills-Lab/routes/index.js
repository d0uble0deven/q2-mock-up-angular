var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Skills' });
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/skills', function(req, res) {
  res.render('skills/index', {
    skills: skillsDb.getAll()
  });
});

module.exports = router;
