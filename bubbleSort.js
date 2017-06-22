var pry = require('pryjs');

function bubbSort(arr) {
  var n = arr.length
  var swapped = false

  for(i = 0; i < n; i++) {
    if (arr[i] > arr[i+1]) {
      arr[i] = arr[i+1];
      arr[i+1] = arr[i];
      var swapped = true
      eval(pry.it);
    }
  }
  return arr
  // break when swapped = false?
  // return the mutated array
}

module.exports = bubbSort
