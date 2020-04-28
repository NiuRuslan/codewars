function zeroPlentiful(arr) {
  return /(^|[^0])0{1,3}(?!=$|0)/.test(arr.join(''))
    ? 0
    : (arr.join('').match(/0{4,}/g) || []).length;
}
