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
});
