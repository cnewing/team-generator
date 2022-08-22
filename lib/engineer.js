// I M P O R T  E M P L O Y E E  C O N S T R U C T O R
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  // R E T U R N  G I T H U B  I N P U T
  getGithub() {
    return this.github;
  }

  // O V E R R I D E  R O L E  T O  E N G I N E E R
  getRole() {
    return "Engineer";
  }
}

// T O  B E  E X P O R T E D
module.exports = Engineer;
