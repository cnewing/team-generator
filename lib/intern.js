// I M P O R T  E M P L O Y E E  C O N S T R U C T O R
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  // R E T U R N  S C H O O L  I N P U T
  getSchool() {
    return this.school;
  }

  // O V E R R I D E  R O L E  T O  I N T E R N
  getRole() {
    return "Intern";
  }
}

// T O  B E  E X P O R T E D
module.exports = Intern;
