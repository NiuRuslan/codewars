// https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

function createUsername(name, initials, age) {
  return (
    name.toLowerCase()
    + initials[0].toLowerCase()
    + (new Date().getFullYear() - age)
  );
}

function addUsername(list) {
  list.forEach(({ firstName, lastName, age }, i) => {
    list[i].username = createUsername(firstName, lastName, age);
  });
  return list;
}
