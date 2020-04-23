// https://www.codewars.com/kata/583710f6b468c07ba1000017/train/javascript

function proofread(str) {
  return str
    .toLowerCase()
    .replace(/(^\w|\.\s\w)/g, (match) => match.toUpperCase())
    .replace(/ie/g, 'ei');
}
