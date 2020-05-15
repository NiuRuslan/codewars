// https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript

function findSenior(list) {
  return list.filter((person) => person.age === Math.max(...(list.map((el) => el.age))));
}
