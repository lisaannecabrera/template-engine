"use strict";

const Employee = require("../lib/employee");

describe("Employee", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee(10, "lisa", "engineer", "lisa@gmail.com");
  });
  describe("initialization", () => {
    it("should create an object with an 'id' property", () => {
      // arrange and act
      //   const employee = new Employee(10);

      // assert
      expect(employee.id).toEqual(10);
    });
    it("should create an object with a 'name' property", () => {
      expect(employee.name).toEqual("lisa");
    });
    it("should create an object with a 'title' property", () => {
      expect(employee.title).toEqual("engineer");
    });
    it("should create an object with an 'email' property", () => {
      expect(employee.email).toEqual("lisa@gmail.com");
    });
    describe("getName", () => {
      it("should return the employee's name", () => {
        expect(employee.getName()).toEqual("lisa");
      });
      describe("getId", () => {
        it("should return the Id of the employee", () => {
          expect(employee.getId()).toEqual(10);
        });
      });
      describe("getEmail", () => {
        it("should return the email of the employee", () => {
          expect(employee.getEmail()).toEqual("lisa@gmail.com");
        });
      });
      describe("getRole", () => {
        it("should return the role Employee", () => {
          expect(employee.getRole()).toEqual("Employee");
        });
      });
    });
  });
});
