// S T A R T  W I T H  E M P L O Y E E  C O N S T R U C T O R
const Employee = require("../lib/employee");

// E M P L O Y E E  O B J E C T
test("creates an employee object", () => {
  const employee = new Employee("Christa", 17, "cnewing@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// G E T  N A M E
test("gets employee name", () => {
  const employee = new Employee("Christa", 17, "cnewing@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// G E T  I D
test("gets employee ID", () => {
  const employee = new Employee("Christa", 17, "cnewing@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// G E T  E M A I L
test("gets employee email", () => {
  const employee = new Employee("Christa", 17, "cnewing@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// G E T  R O L E
test("gets role of employee", () => {
  const employee = new Employee("Christa", 17, "cnewing@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
