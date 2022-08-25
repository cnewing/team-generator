const Intern = require("../lib/intern");

test("Get intern's school using getSchool()", () => {
  const testParam = "NYU";
  const intern = new Intern("Christa", 17, "cnewing@gmail", testParam);

  expect(intern.getSchool()).toBe(testParam);
});

test("Use getRole() to get employee type", () => {
  const testParam = "Intern";
  const intern = new Intern("Christa", 17, "cnewing@gmail.com", "NYU");

  expect(intern.getRole()).toBe(testParam);
});
