var express = require('express');
var router = express.Router();
var skillsCtrl = require('../models/skills');

// router.get('/', skillsCtrl.index);

// var skills = require('../models/skills');

// router.get('/', skills);

/* GET users listing. */


router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
