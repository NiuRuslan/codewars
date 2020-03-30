// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  const [start, end] = [arr[0], arr[arr.length - 1]];
  if (start === end) {
    for (el of arr) {
      if (el !== start) {
        return el;
      }
    }
  } else {
    return start !== arr[1] ? start : end;
  }
}
