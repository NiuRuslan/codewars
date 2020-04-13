//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/javascript

function incrementString(strng) {
  const strArray = strng.match(/(\D*)(0*)([1-9]*)/);
  strArray[3] = Number(strArray[3]) + 1;
  let newString = strArray[1] + strArray[2] + strArray[3];
  if (newString.length !== strng.length) {
    strArray[2] = strArray[2].slice(0, strArray[2].length - 1);
    newString = strArray[1] + strArray[2] + strArray[3];
  }
  return newString;
}
