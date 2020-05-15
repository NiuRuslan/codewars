// https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript

function findOddNames(list) {
  function isNameOdd(name) {
    let sum = 0;
    for (let i = 0, { length } = name; i < length; i += 1) {
      sum += name[i].charCodeAt();
    }
    return sum % 2 === 1;
  }
  return list.filter(({ firstName }) => isNameOdd(firstName));
}

function findOddNames(list) {
  return list.filter(
    ({ firstName }) =>
      firstName
        .split('')
        .reduce((sum, el) => sum + el.charCodeAt(), 0) % 2 !== 0
  );
}
