// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
  const start = cc.slice(0, -4);
  return start.replace(/\w/g, '#') + cc.slice(-4);
}
