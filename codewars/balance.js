// https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f/train/javascript

function balance(book) {
  const getNumber = (str) => (str.match(/\d*\.\d{1,2}/) || [])[0];
  const originalBalance = getNumber(book);

  let expense = 0;

  const check = book
    .replace(/[^\w\s.]+/gi, '')
    .split('\n')
    .map((el, i) => (i === 0
      ? `Original Balance: ${originalBalance}`
      : `${el.replace(/\S+$/g, (m) => parseFloat(m).toFixed(2))} Balance ${(originalBalance - (expense += +getNumber(el))).toFixed(2)}`));
  check.push(`Total expense  ${expense.toFixed(2)}`);
  check.push(`Average expense  ${(expense / (check.length - 2)).toFixed(2)}`);

  return check.join('\r\n');
}
