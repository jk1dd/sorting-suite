const assert = require('chai').assert;
const bubbSort = require('./bubbleSort');

describe("Functionality", function() {
  context("is great", function() {
    it("sorts bubble style", function() {
      assert.equal(bubbSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
    });
  });
});
