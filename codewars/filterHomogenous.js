// https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/javascript

function filterHomogenous(arrays) {
  return arrays
    .filter((array) => array.length > 0 && array
      .every((el) => typeof (el) === typeof (array[0])));
}
