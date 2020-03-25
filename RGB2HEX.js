// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
  const args = arguments;

  for (let i = 0; i < 3; i++) {
    if (args[i] < 0) { args[i] = 0; }
    if (args[i] > 255) { args[i] = 255; }

    args[i] < 16 ? args[i] = `0${args[i].toString(16)}` : args[i] = args[i].toString(16);
  }
  return `${r}${g}${b}`.toUpperCase();
}

function rgb(r, g, b) {
  return `${hex(r)}${hex(g)}${hex(b)}`.toUpperCase();
}

function hex(color) {
  if (color < 0) return '00';
  if (color > 255) return 'FF';
  return color < 16 ? `0${color.toString(16)}` : color.toString(16);
}
