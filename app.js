"use strict";
console.clear();

const fs = require("fs");
const inquirer = require("inquirer");
const prompts = require("./template/questions"); // your questions
const util = require("util");
const axios = require("axios");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const managers = []; // [obj, obj, obj]
const engineers = [];
const interns = [];

// const writeFileAsync = util.promisify(fs);
const basicQuestions = prompts[0].basicQuestions;

async function getEmployeeInfo() {
  const employeeInfoObj = await inquirer.prompt(basicQuestions);
  console.log(employeeInfoObj);
  if (employeeInfoObj.title === "Manager") {
    employeeInfoObj.officeNumber = await inquirer.prompt(prompts[0].Manager);
    console.log(employeeInfoObj);
    const newManager = new Manager(
      employeeInfoObj.id,
      employeeInfoObj.name,
      employeeInfoObj.email,
      employeeInfoObj.officeNumber
    );
    managers.push(newManager);
  } else if (employeeInfoObj.title === "Engineer") {
    employeeInfoObj.askForGithub = await inquirer.prompt(prompts[0].Engineer);
    console.log(employeeInfoObj);
    const newEngineer = new Engineer(
      employeeInfoObj.id,
      employeeInfoObj.name,
      employeeInfoObj.email,
      employeeInfoObj.askForGithub
    );
    engineers.push(newEngineer);
  } else if (employeeInfoObj.title === "Intern") {
    employeeInfoObj.askSchool = await inquirer.prompt(prompts[0].Intern);
    console.log(employeeInfoObj);
    const newIntern = new Intern(
      employeeInfoObj.id,
      employeeInfoObj.name,
      employeeInfoObj.email,
      employeeInfoObj.askSchool
    );
    interns.push(newIntern);
  }
}

getEmployeeInfo();

async function askForOfficeNumber() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office Number??"
    }
  ]);
}

async function askForGithub() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "GithubUser",
      message: "What is your Github Username?"
    }
  ]);
}

async function askSchool() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "Where did you go to school?"
    }
  ]);
}

async function addMore() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "addMore",
      message: "Add more employee?",
      choice: ["Yes", "No"]
    }
  ]);
}

// const employeeObj = getEmployeeInfo();
// const employeeInfo = inquirer.prompt(reallyBasicQuestion);
// console.log(employeeInfo);

// console.log(prompts[0].basicQuestions);

// switch (employeeObj.role) {
//   case "Manager":
//     // new function for manager here
//     employeeObj.officeNumbrer = askForOfficeNumber();
//     return;
//   case "Engineer":
//     employeeObj.github = askForGithub();
//     return;
//   case "Intern":
//     employeeObj.school = askSchool();
//     return;
// }

// let addMoreObj = addMore();

// let answer = addMoreObj.addMore;
// if (answer === "Yes") {
//   promptUser();
// } else {
//   // do something
//   console.log("do something");
// }

// for (let manager of Managers) {
//   return;
// }
// async function init() {
//   console.log("initialization...");
//   try {
//     const { name, res } = await prompt(promptUser);
//     const res = await get(`https://api.github.com/users/${askForGithub}`);
//         const req = await get();
//   catch  (err) {
//     console.error(er);
//   }
//   }
