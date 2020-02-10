"use strict";

const Employee = require("../lib/employee");

class Engineer extends Employee {
  constructor(id, name, email, githubUser) {
    super(id, name, "Engineer", email);
    this.githubUser = githubUser;
  }
  getGithub() {
    return "lisaannecabrera";
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
