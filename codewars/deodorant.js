// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript

function evaporator(content, evap_per_day, threshold) {
  let usage = 100;
  let days = 0;
  while (usage > threshold) {
    usage -= usage * evap_per_day / 100,
    days += 1;
  }
  return days;
}
