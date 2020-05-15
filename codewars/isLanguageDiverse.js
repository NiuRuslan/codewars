// https://www.codewars.com/kata/58381907f8ac48ae070000de/train/javascript

function isLanguageDiverse(list) {
  const obj = {};
  list.forEach(({ language }) => (
    obj.hasOwnProperty(language)
      ? (obj[language] += 1)
      : (obj[language] = 1)
  ));
  return Math.max(...Object.values(obj)) / Math.min(...Object.values(obj)) <= 2;
}
