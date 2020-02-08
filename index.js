"use strict";

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const employees = [];
// const writeFileAsync = util.promisify(fs);

function promptUser() {
  console.log("build your team!");
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Manager's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID?"
    },
    {
      type: "input",
      name: "title",
      message: "What is your title"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email"
    }
  ]);
}
promptUser();

// function generateHTML(res, req) {
//   return ``;
// }

// async function init() {
//   console.log("initialization...");
//   try {
//     const { name, res } = await prompt(userQuestions);
//     const res = await get(``);
//     const req = await get();

//     const
//   }
// }
