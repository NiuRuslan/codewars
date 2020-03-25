// https://www.codewars.com/kata/57f7e7617a28db2a2200021a/javascript

function multiply(n, l) {
  return l.map((int) => {
    if (n === 0) return int;
    let counter = n;
    let res = -0;
    while (counter !== 0) {
      if (counter < 0) {
        res += -int;
        counter++;
      } else {
        res += int;
        counter--;
      }
    }
    return res;
  });
}
