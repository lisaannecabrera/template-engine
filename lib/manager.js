"use strict";

const Employee = require("../lib/employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(10, "lisa", "engineer", "lisa@gmail.com");
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
