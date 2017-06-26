var pry = require('pryjs');

function insertionSort(arr) {

  // call the first element in the array sorted
  // for remaining elements, compare with element below and
  // shift until element is greater than the one below
  for(i = 1; i < arr.length; i++) {
    var element = arr[i]; // create element - value we are looking at to insert
    var t = i - 1; // assign t to be sorted index (furthest left element)

    while (t >= 0 && arr[t] > element) { // while sorted index is greater than 0 and the value at that index is greater that the element under consideration
      arr[t + 1] = arr[t]; // moving the items in the list - assign the one from a higher index to the one at a lower - temporarity making it repeated [1,2,4,3,5] would be [1,2,4,4,5]
      t--; // reduce the sorted index by 1 to keep looking at the lower indicies
    }
    arr[t + 1] = element // when it hits a false in the while loop, assign the next sorted index to be the element we are looking at
  }
  return arr;
}

module.exports = insertionSort
