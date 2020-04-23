// https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript

function deleteDigit(n) {
  const str = n.toString();
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    const digit = +(str.slice(0, i) + str.slice(i + 1));
    if (result < digit) result = digit;
  }
  return result;
}
