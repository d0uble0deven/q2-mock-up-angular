var skills = require('../models/skills');



  
  function index(req, res) {
    res.render('skills/index', {
      skills: skills.getAll()
    });
  }
  

  function show(req, res) {
    res.render('skills/show', {
      skills: skills.getOne(req.params.id),
      skillsNum: parseInt(req.params.id) + 1
    });
  }

  module.exports = {
    index,
    show
  };