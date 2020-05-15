// https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript

function orderFood(list) {
  return list.reduce(
    (obj, { meal }) => (obj[meal] ? (obj[meal] += 1) : (obj[meal] = 1), obj),
    {},
  );
}
