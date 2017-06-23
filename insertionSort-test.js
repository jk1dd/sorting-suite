const assert = require('chai').assert;
const insertionSort = require('./insertionSort');

it("sorts insertion style", function() {
  assert.deepEqual(insertionSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
});
