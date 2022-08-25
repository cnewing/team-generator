const Engineer = require("../lib/engineer");

// // E N G I N E E R  O B J E C T  T E S T
test("Create engineer object", () => {
  const engineer = new Engineer("Christa", 17, "cnewing@gmail.com", "cnewing");

  expect(typeof engineer).toBe("object");
});

// G E T  R O L E  T E S T
test("Get role of employee", () => {
  const engineer = new Engineer("Christa", 17, "cnewing@gmail", "cnewing");

  expect(engineer.getRole()).toBe("Engineer");
});

// G E T  G I T H U B
test("Get engineer's github", () => {
  const testParam = "cnewing";
  const engineer = new Engineer("Christa", 17, "cnewing@gmail", testParam);

  expect(engineer.getGithub()).toBe(testParam);
});
