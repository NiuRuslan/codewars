function countingValleys(n, s) {
  let altitude = 0;
  let valleys = 0;

  for (let i = 0; i < n; i += 1) {
    if (s[i] === 'D') altitude -= 1;
    if (s[i] === 'U') {
      altitude += 1;
      if (altitude === 0) valleys += 1;
    }
  }
  return valleys;
}
