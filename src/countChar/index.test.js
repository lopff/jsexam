const program = require("./index");
const chai = require("chai");
var assert = require("assert");

it("Test Case #1. Should return character count in an object", () => {
  const result = program.countChar();
  chai.expect(result).to.be.an("object");
});

it("Test Case #2. Should be able to count chars", () => {
  var result = program.countChar("abca");

  assert.equal(result.a, 2);
  assert.equal(result.b, 1);
});

it("Test Case #3. Should be able to count chars", () => {
  const input = "The Quick Brown Fox Jumps Over The Lazy Dog";
  const result = program.countChar(input);
  assert.equal(result[" "], 8);
  assert.equal(result.T, 2);
  assert.equal(result.o, 3);
});
