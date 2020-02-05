"use strict";

const Intern = require("../lib/intern");

describe("Intern", () => {
  let intern;

  beforeEach(() => {
    intern = new Intern("IUPUI");
  });
  describe("initialization", () => {
    it("should create an object with the Intern's school", () => {
      expect(intern.internSchool).toEqual("IUPUI");
    });
  });
  describe("getSchool", () => {
    it("should return the school of the Intern", () => {
      expect(intern.getSchool()).toEqual("IUPUI");
    });
  });
  describe("getRole", () => {
    it("should return the role Intern", () => {
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
