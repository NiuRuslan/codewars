// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  return s
    .split(' ')
    .reduce((prev, word) => (prev.length > word.length ? word : prev))
    .length;
}

// or

function findShort(s) {
  return Math.min(...s.split(' ').map(word => word.length))
}
