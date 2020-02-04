"use strict";

const Manager = require("../lib/manager");

describe("Manager", () => {
  let manager;

  beforeEach(() => {
    manager = new Manager(1);
  });
  describe("initialization", () => {
    it("should create an object with an 'office number' ", () => {
      expect(manager.officeNumber).toEqual(1);
    });
  });
  describe("getRole", () => {
    it("should return the role Manager", () => {
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
