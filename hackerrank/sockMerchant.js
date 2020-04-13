function sockMerchant(n, ar) {
  const sorted = ar.sort((a, b) => a - b);
  let pairs = 0;
  for (let i = 0; i < n - 1; i += 1) {
    if (sorted[i] === sorted[i + 1]) {
      pairs += 1;
      i += 1;
    }
  }
  return pairs;
}
