const { assert } = require("console");

const Demo = artifacts.require("Demo");

contract("Demo", () => {
  //This is the test block
  it("It should return the value that was passed", async () => {
    const demo = await Demo.deployed();
    await demo.set("Dhruv");
    const result = await demo.get();

    assert(result == "Dhruv");
  });
});
