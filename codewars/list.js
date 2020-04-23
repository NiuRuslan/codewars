// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

function list(names) {
  return names.reduce((str, { name }, indx) => {
    if (indx === names.length - 2) return `${str + name} & `;
    if (indx === names.length - 1) return str + name;
    return `${str + name}, `;
  }, '');
}
