// U S E  M A N A G E R  C O N S T R U C T O R
const Manager = require("../lib/manager");

// M A N A G E R  O B J E C T
test("creates an Manager object", () => {
  const manager = new Manager("Christa", 17, "cnewing@gmail", 8);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// G E T  R O L E
test("gets role of employee", () => {
  const manager = new Manager("Christa", 17, "cnewing@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
