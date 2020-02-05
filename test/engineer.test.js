"use strict";

const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  let engineer;

  beforeEach(() => {
    engineer = new Engineer("lisaannecabrera");
  });
  describe("initialization", () => {
    it("should create an object with github username property", () => {
      expect(engineer.githubUser).toEqual("lisaannecabrera");
    });
  });
  describe("getGithub", () => {
    it("should return the github username", () => {
      expect(engineer.getGithub()).toEqual("lisaannecabrera");
    });
  });
  describe("getRole", () => {
    it("should return the role Engineer", () => {
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
