"use strict";

const Employee = require("../lib/employee");

class Intern extends Employee {
  constructor(internSchool) {
    super(10, "lisa", "engineer", "lisa@gmail.com");
    this.internSchool = internSchool;
  }
  getSchool() {
    return "IUPUI";
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
