var pry = require('pryjs');

function insertionSort(arr) {

  // call the first element in the array sorted
  // for remaining elements, compare with element below and
  // shift until element is greater than the one below
  for(i = 1; i < arr.length; i++) {
    do {
      var element = arr[i]
      var t = i - 1
      if(element < arr[t]) {
        arr[t + 1] = arr[t]
        arr[t] = element
        t = t - 1
      }
    } while (i >= 0 && arr[i - 1] > element);
    return arr
  }
}

module.exports = insertionSort
