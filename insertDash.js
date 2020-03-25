function insertDash(num) {
  const arr = num.toString().split('');
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] % 2 === 1 && arr[i - 1] % 2 === 1) { arr[i] = -arr[i]; }
  }
  return arr.join('');
}
