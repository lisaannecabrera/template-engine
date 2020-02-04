"use strict";

const Employee = require("../lib/employee");

describe("Employee", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee(10, "lisa");
  });
  describe("initialization", () => {
    it("should create an object with an id property", () => {
      // arrange and act
      //   const employee = new Employee(10);

      // assert
      expect(employee.id).toEqual(10);
    });
    it("should creat an object with a name property", () => {
      expect(employee.name).toEqual("lisa");
    });
  });
});
