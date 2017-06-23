var pry = require('pryjs');

function bubbSort(arr) {
  do {
    var swapped = false
    for(i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        var change = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = change;
        swapped = true;
      }
    }
  } while (swapped === true);
  return arr
}

module.exports = bubbSort
