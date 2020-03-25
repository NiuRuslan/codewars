// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
  const res = [];
  for (let i = a; i < b; i++) {
    const str = i.toString();
    if (str.length > 1) {
      let sum = 0;
      const arr = str.split('');
      for (let j = 0; j < arr.length; j++) {
        sum += arr[j] ** (j + 1);
      }
      if (sum === i) {
        res.push(i);
      }
    } else {
      res.push(i);
    }
  }
  return res;
}

sumDigPow(88, 90);
