// I M P O R T  E M P L O Y E E  C O N S T R U C T O R
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

// T O  B E  E X P O R T E D
export default Manager;
