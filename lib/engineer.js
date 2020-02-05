"use strict";

const Employee = require("../lib/employee");

class Engineer extends Employee {
  constructor(githubUser) {
    super(10, "lisa", "engineer", "lisaannecabrera.com");
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
