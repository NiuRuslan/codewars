// https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript

function askForMissingDetails(list) {
  return list
    .filter((dev) => Object.values(dev).includes(null))
    .map((el) => {
      const property = Object.keys(el).find((key) => el[key] === null);
      el.question = `Hi, could you please provide your ${property}.`;
      return el;
    });
}
