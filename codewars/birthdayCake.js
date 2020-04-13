// https://www.codewars.com/kata/5805ed25c2799821cb000005/train/javascript

function cake(x, y) {
  return y
    .split('')
    .reduce(
      (sum, letter, index) => (
        index % 2 === 0 ? sum + letter.charCodeAt() : sum + letter.charCodeAt() - 96
      ), 0,
    ) < (x * 0.7) ? 'That was close!' : 'Fire!';
}
