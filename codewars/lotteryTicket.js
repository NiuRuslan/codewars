
// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

function bingo(ticket, win) {
  return ticket
    .reduce((acc, check) => acc + +check[0]
      .includes(String.fromCharCode(check[1])), 0) >= win
    ? 'Winner!' : 'Loser!';
}
