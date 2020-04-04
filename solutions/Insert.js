// https://www.codewars.com/kata/529b54d9aba78c924d00088e/train/javascript

function format(str, obj) {
  return str
    .replace(/{([\w|\d]{1,})}/g,
      (match, p1) => (obj[p1] !== undefined ? obj[p1] : match));
}
