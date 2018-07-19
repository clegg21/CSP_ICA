function class (id, date, name, max, assignment) {
  this.id = id;
  this.date = date;
  this.name = name;
  this.max = max;
  this.assignment = assignment;

  this.getId = function() {
    return this.id;
  };

  this.setId = function(id) {
    this.id = id;
  };

  this.getDate = function() {
    return this.date;
  };

  this.setDate = function(date) {
    this.date = date;
  };

  this.getName = function() {
    return this.name;
  };

  this.setName = function(name) {
    this.name = name;
  };

  this.getMax = function() {
    return this.max;
  };

  this.setMax = function(max) {
    this.max = max;
  };

  this.getAssignment = function() {
    return this.assignment
  };

  this.setAssignment = function(assignment) {
    this.assignment = assignment;
  };

};
