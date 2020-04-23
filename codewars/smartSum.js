// https://www.codewars.com/kata/5831200eb812b8016d000094/train/javascript

function smartSum() {
  return [...arguments]
    .reduce((sum, el) => sum + (Array.isArray(el) ? smartSum(...el) : el), 0);
}
