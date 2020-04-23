//https://www.codewars.com/kata/59dc8288fc3c49cc3f000039/train/javascript

function sort(initialArray, sortingArray) {
  const sorted = new Array(initialArray.length);
  for (let i = 0; i < initialArray.length; i += 1) {
    sorted[sortingArray[i]] = initialArray[i];
  }
  return sorted;
}
