// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

function capitalize(s){
  const result = ['', '']
  
  for (let i = 0; i < s.length; i += 1) {
    if (i % 2 === 0) {
      result[0] += s[i].toUpperCase();
      result[1] += s[i]
    } else {
      result[0] += s[i]
      result[1] += s[i].toUpperCase();
    }
  }
  return result
};


function capitalize(s) {
  const even = s.split('').map((el, indx) => (indx % 2 === 0 ? el.toUpperCase() : el)).join('');
  const odd = s.split('').map((el, indx) => (indx % 2 !== 0 ? el.toUpperCase() : el)).join('');
  return [even, odd];
}
