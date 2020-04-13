function repeatedString(s, n) {
  const counter = (s.match(/a/g) || []).length * Math.floor(n / s.length);
  const remainder = n % s.length;
  const remainderCounter = (s.slice(0, remainder).match(/a/g) || []).length;

  return counter + remainderCounter;
}
