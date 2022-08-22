// U S E  E N G I N E E R  C O N S T R U C T O R
const Engineer = require("../lib/engineer");

// E N G I N E E R  O B J E C T
test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "Christa",
    17,
    "cnewing@gmail.com",
    "cnewing17"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

// G E T  G I T H U B
test("gets engineer github value", () => {
  const engineer = new Engineer("Christa", 90, "cnewing@gmail", "cnewing17");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// G E T  R O L E
test("gets role of employee", () => {
  const engineer = new Engineer("Christa", 90, "cnewing@gmail", "cnewing17");

  expect(engineer.getRole()).toEqual("Engineer");
});
