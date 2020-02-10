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

const writeFileAsync = util.promisify(fs.writeFile);
const basicQuestions = prompts[0].basicQuestions;

// add objs to respected arrays
async function getEmployeeInfo() {
  const employeeInfoObj = await inquirer.prompt(basicQuestions);
  console.log(employeeInfoObj);
  if (employeeInfoObj.title === "Manager") {
    let officeNumberObj = await inquirer.prompt(prompts[0].Manager);
    console.log(employeeInfoObj);
    const newManager = new Manager(
      employeeInfoObj.id,
      employeeInfoObj.name,
      employeeInfoObj.email,
      officeNumberObj.officeNumber
    );
    managers.push(newManager);
  } else if (employeeInfoObj.title === "Engineer") {
    let githubUserObj = await inquirer.prompt(prompts[0].Engineer);
    console.log(employeeInfoObj);
    const newEngineer = new Engineer(
      employeeInfoObj.id,
      employeeInfoObj.name,
      employeeInfoObj.email,
      githubUserObj.github
    );
    engineers.push(newEngineer);
  } else if (employeeInfoObj.title === "Intern") {
    let internSchoolObj = await inquirer.prompt(prompts[0].Intern);
    console.log(employeeInfoObj);
    const newIntern = new Intern(
      employeeInfoObj.id,
      employeeInfoObj.name,
      employeeInfoObj.email,
      internSchoolObj.school
    );
    interns.push(newIntern);
  }
}

async function addMore() {
  const addMoreResObj = await inquirer.prompt(prompts[0].addMore);
  if (addMoreResObj.addMore === "Yes") {
    return true;
  } else {
    return false;
  }
}

async function init() {
  let keepAsking = true;
  while (keepAsking) {
    await getEmployeeInfo();
    keepAsking = await addMore();
  }
  const final = generateHtml();
  await writeFileAsync(`./output/text.html`, final);
  console.log(final);
  //
}

const generateHtml = () => {
  let managerHtml = "";
  let engineerHtml = "";
  let internHtml = "";
  for (const manager of managers) {
    managerHtml += `
    <div class="card m-2">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <p class="card-text">
              ID: ${manager.id} <br>
              Email: ${manager.email} <br>
              Office Number: ${manager.officeNumber}
            </p>
          </div>
    `;
  }
  for (const engineer of engineers) {
    engineerHtml += `
  <div class="card m-2">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <p class="card-text">
              ID: ${engineer.id} <br>
              Email: ${engineer.email} <br>
              GitHub: ${engineer.githubUser}
            </p>
          </div>
    `;
  }
  for (const intern of interns) {
    internHtml += `
    <div class="card m-2">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <p class="card-text">
              ID: ${intern.id} <br>
              Email: ${intern.email} <br>
              School: ${intern.school}
            </p>
          </div>
    `;
  }
  let finalHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <h1 style="text-align: center;">My Team!</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex flex-direction-column">

          

          ${managerHtml}
          ${engineerHtml}
          ${internHtml}
        </div>
      </div>
    </div>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Document</title>
  </head>
  <body style="background-color: rgb(125, 138, 139);"></body>
</html>
`;
  return finalHtml;
};

init();

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
