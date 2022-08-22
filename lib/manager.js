// I M P O R T  E M P L O Y E E  C O N S T R U C T O R
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // O V E R R I D E  R O L E  T O  E N G I N E E R
  getRole() {
    return "Manager";
  }
}

// T O  B E  E X P O R T E D
module.exports = Manager;
