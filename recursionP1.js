function rec(num) {
  return num ? (num % 10) + rec(num / 10) : 0;
}
console.log(rec(4567));
