// https://www.codewars.com/kata/find-the-unique-number

function findUnique(numbers) {
  const hash = {};
  const { length } = numbers;

  for (let i = 0; i < length; i += 1) {
    hash.hasOwnProperty(numbers[i])
      ? hash[numbers[i]] += 1
      : hash[numbers[i]] = 1;
  }

  for (let j = 0; j < length; j += 1) {
    if (hash[numbers[j]] === 1) {
      return numbers[j];
    }
  }
}
