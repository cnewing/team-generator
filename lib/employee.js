// E M P L O Y E E  C O N S T R U C T O R
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // R E T U R N  N A M E  I N P U T
  getName() {
    return this.name;
  }

  // R E T U R N  I D  I N P U T
  getId() {
    return this.id;
  }

  // R E T U R N  E M A I L  I N P U T
  getEmail() {
    return this.email;
  }

  // R E T U R N  E M P L O Y E E  T Y P E
  getRole() {
    return "Employee";
  }
}

// T O  B E  E X P O R T E D
export default Employee;
