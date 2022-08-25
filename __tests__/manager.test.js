const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Get office number ", () => {
  const testParam = 2487650989;
  const Employee = new Manager("Christa", 17, "cnewing@gmail.com", testParam);

  expect(Employee.getOfficeNumber()).toBe(testParam);
});

test("Get role of employee to return Manager", () => {
  const testParam = "Manager";
  const Employee = new Manager("Christa", 17, "cnewing@gmail.com", 2487650989);

  expect(Employee.getRole()).toBe(testParam);
});
