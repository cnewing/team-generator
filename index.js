const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateHTML = require("./src/generatehtml").default;
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { response } = require("express");

teamArray = [];

function startApp() {
  console.log("Let's build your team!");
  // M A N A G E R  P R O M P T S
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
      },

      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID.",
      },

      {
        type: "input",
        name: "email",
        message: "Enter the manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number",
        validate(value) {
          const valid = isNaN(value);
          return valid("Please enter an office number!");
        },
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );

      teamArray.push(manager);
      startApp();
    });
}

// A D D I T I O N A L  E M P L O Y E E  P R O M P T S
const addEmployees = () => {
  console.log(`
    =================
    Adding employees to the team
    =================
    `);

  // E N G I N E E R  P R O M P T S
  function addEngineer() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Choose a role for this employee",
          choices: ["Engineer", "Intern"],
        },
        {
          type: "input",
          name: "name",
          message: "What is the employee's name?",
        },
        {
          type: "input",
          name: "id",
          message: "Enter the employee's ID.",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter the employee's email.",
        },
        {
          type: "input",
          name: "github",
          message: "Enter the employee's github username.",
          when: (input) => input.role === "Engineer",
          validate(value) {
            const valid = isNaN(value);
            return valid("Please enter the employee's github username!");
          },
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.github
        );

        teamArray.push(engineer);
        startApp();
      });
  }
};

// I N T E R N  P R O M P T S
function addIntern() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Choose a role for this employee",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the name of the intern's school",
        when: (input) => input.role === "Intern",
        validate(value) {
          const valid = isNaN(value);
          return valid("Please enter the name of the intern's school!");
        },
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );

      teamArray.push(intern);
      startApp();
    });
}

// C R E A T E  H T M L  P A G E
function createHtml() {
  console.log("Your team is built!");
  const teamArray = teamArray.join("");
  fs.writeFile("./dist/index.html");
}

startApp();
