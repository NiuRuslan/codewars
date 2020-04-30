// https://www.codewars.com/kata/581dc1852d68e751180000c6/train/javascript

Object.defineProperty(Array.prototype, 'insert', {
  enumerable: false,
  value(index, item) {
    this.splice(index, 0, item);
    return this;
  },
});
