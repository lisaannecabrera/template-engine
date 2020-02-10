"use strict";

class Employee {
  constructor(id, name, title, email) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.email = email;
  }
  getName(name) {
    return this.name;
  }
  getId(id) {
    return this.id;
  }
  getEmail(email) {
    return this.email;
  }
  getRole() {
    return this.title;
  }
}
module.exports = Employee;
