// https://www.codewars.com/kata/5b7176768adeae9bc9000056/train/javascript

function indexEqualsValue(a) {
  let min = 0;
  let max = a.length - 1;
  while (min < max) {
    const i = Math.floor((min + max) / 2);
    if (i <= a[i]) max = i;
    else min = i + 1;
  }
  return a[max] === max ? max : -1;
}
