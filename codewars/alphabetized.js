function alphabetized(s) {
  return s
    .replace(/[^\w]|\d/g, '')
    .split('')
    .sort((a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();
      if (a === b) return 0;
      return a < b ? -1 : 1;
    })
    .join('');
}

console.log(alphabetized('The Holy Bible'));
