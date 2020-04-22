// https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

function zipWith(fn, a0, a1) {
  const result = [];

  const i = Math.min(a0.length, a1.length);

  for (let j = 0; j < i; j += 1) {
    result.push(fn(a0[j], a1[j]));
  }

  return result;
}
