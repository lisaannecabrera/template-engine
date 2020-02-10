"use strict";

const Employee = require("../lib/employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, "Manager", email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return this.title;
  }
}

module.exports = Manager;
