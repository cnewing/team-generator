// M O D U L E S
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/generatehtml");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamArray = [];

// M A N A G E R  P R O M P T S
const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter the manager's name!";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            return "Please enter the manager's ID!";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            return "Please enter an email!";
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            return "Please enter an office number!";
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  console.log(`
    =================
    Adding employees to the team
    =================
    `);

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
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter an employee's name!";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the employee's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            return "Please enter the employee's ID!";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            return "Please enter an email!";
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter the employee's github username!";
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter the name of the intern's school",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return "Please enter the intern's school!";
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // D A T A  F O R  E A C H  E M P L O Y E E  T Y P E

      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

// F U N C T I O N  T O  C R E A T E  H T M L  P A G E  W I T H  F S
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    // I F  E R R O R
    if (err) {
      console.log(err);
      return;
      // W H E N  P R O F I L E  C R E A T E D
    } else {
      console.log(
        "Your team profile has been generated successfully! See results in the index.html."
      );
    }
  });
};

addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
