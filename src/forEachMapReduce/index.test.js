const program = require("./index");
var assert = require("assert");

it("Test Case #1. Should execute forEach correctly", () => {
  let count = 0;
  program.myForEach(
    [1, 2, 3, 4],
    (val, index) => (count += val * index * index)
  );
  assert.equal(count, 50);
});

it("Test Case #2. Should execute map correctly", () => {
  const result = program.myMap(
    [1, 2, 3, 4],
    (val, index) => val * index * index
  );

  assert.equal(result[0], 0);
  assert.equal(result[2], 12);
});

it("Test Case #3. Should execute reduce correctly", () => {
  const result = program.myReduce(
    [10, 2, 3],
    (cal, val, index) => cal + val * index,
    0
  );
  assert.equal(result, 8);
});
