function infiniteLoop(arr, d, n) {
  for (let i = 0; i < n; i += 1) {
    arr.map((el, indx) => {
      d === 'left'
        ? arr[indx === 0 ? arr.length - 1 : indx - 1].push(el.shift())
        : arr[indx === arr.length - 1 ? 0 : indx + 1].unshift(el.pop());
    });
  }
  return arr;
}
