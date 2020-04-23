// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  let result = -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (
      arr.slice(0, i).reduce((sum, el) => sum + el, 0)
      === arr.slice(i + 1).reduce((sum, el) => sum + el, 0)
    ) {
      result = i;
    }
  }
  return result;
}
