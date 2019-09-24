const program = require("./index");
const chai = require("chai");
var assert = require("assert");

it("Test Case #1. Should return a function", () => {
  const result = program.adder();
  chai.expect(result).to.be.a("function");
});

it("Test Case #2. Should get default value with 0", () => {
  assert.equal(program.adder().getValue(), 0);
});

it("Test Case #3. Should be able to add mutiple numbers", () => {
  assert.equal(program.adder(10).getValue(), 10);
  assert.equal(
    program
      .adder(10)(20)(30)
      .getValue(),
    60
  );
  assert.equal(
    program
      .adder(10)(20)(30)(40)
      .getValue(),
    100
  );
});
