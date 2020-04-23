// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
  const sortedWord = word.split('').sort().join();
  return words.filter(
    (wordOfWords) => wordOfWords.split('').sort().join() === sortedWord,
  );
}
