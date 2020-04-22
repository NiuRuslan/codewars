// https://www.codewars.com/kata/5552101f47fc5178b1000050/solutions/javascript

function digPow(n, p) {
  const nstr = `${n}`;
  let result = 0;

  for (let i = 0; i < nstr.length; i += 1) {
    result += nstr[i] ** (p + i);
  }
  return result % n ? -1 : result / n;
}
