const program = require("./index");
const utils = require("../utils/spy");
const assert = require("assert");

function asyncTask1(done) {
  setTimeout(() => {
    console.log("task 1 done");
    done(1);
  }, 500);
}
function asyncTask2(done) {
  setTimeout(() => {
    console.log("task 2 done");
    done(2);
  }, 400);
}
function asyncTask3(done) {
  setTimeout(() => {
    console.log("task 3 done");
    done(3);
  }, 300);
}

const tasks = [asyncTask1, asyncTask2, asyncTask3];

// first (and only) set of tests
describe("myAsyncFunction", function() {
  it("sequential test", function(done) {
    const spy = utils.spy(console, "log");

    program.sequential(tasks);

    assert.equal(spy.callCount(), 0);

    setTimeout(() => {
      assert.equal(spy.callCount(), 1);
      assert.ok(spy.calledWith("task 1 done"));

      setTimeout(() => {
        assert.equal(spy.callCount(), 3);
        assert.ok(spy.calledWith("task 3 done"));
        done();
      }, 700);
    }, 600);
  });
});
