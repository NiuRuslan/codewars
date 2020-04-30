// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  const wordLC = word.toLowerCase();
  const { length } = word;
  let result = '';

  for (let i = 0; i < length; i += 1) {
    wordLC.indexOf(wordLC[i]) === wordLC.lastIndexOf(wordLC[i])
      ? (result += '(')
      : (result += ')');
  }

  return result;
}

function duplicateEncode(word) {
  const wordLC = word.toLowerCase();
  const { length } = word;
  const hash = {};

  for (let i = 0; i < length; i += 1) {
    hash.hasOwnProperty(wordLC[i])
      ? (hash[wordLC[i]] += 1)
      : (hash[wordLC[i]] = 1);
  }

  let result = '';

  for (let j = 0; j < length; j += 1) {
    hash[wordLC[j]] > 1
      ? (result += ')')
      : (result += '(');
  }

  return result;
}
