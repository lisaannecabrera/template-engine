"use strict";

const Employee = require("../lib/employee");

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, "Intern", school);
    this.school = school;
  }
  getSchool() {
    return "IUPUI";
  }
  getRole() {
    return this.title;
  }
}

module.exports = Intern;
