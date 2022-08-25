const Employee = require("../lib/Employee");

// C R E A T E  N E W  E M P L O Y E E  O B J E C T
test("Create new employee", () => {
  const employeeNew = new Employee();
  expect(typeof employeeNew).toBe("object");
});

// G E T  E M P L O Y E E  N A M E
test("Get employee name", () => {
  const name = "Alicia";
  const employeeNew = Employee(name);
  expect(employeeNew.name).toBe(name);
});

// G E T  E M P L O Y E E  I D
test("Get employee ID", () => {
  const empId = 659;
  const employeeNew = new Employee("Alicia", empId);
  expect(employeeNew.empId).toBe(empId);
});

// G E T  E M P L O Y E E  E M A I L
test("Get employee email", () => {
  const email = "alicia.degrassi@gmail.com";
  const employeeNew = new Employee("Alicia", 659, email);
  expect(employeeNew.email).toBe(email);
});

// G E T  E M P L O Y E E  R O L E
test("Get employee role", () => {});
const returnEmp = "Employee";
expect(employeeNew.getRole()).toBe(returnEmp);
