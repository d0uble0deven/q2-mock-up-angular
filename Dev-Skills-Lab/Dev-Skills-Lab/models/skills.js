const skills = [
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: false},
    {skill: 'JavaScript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    return skills[id];
  }
  
  function getAll() {
    return skill;
  }