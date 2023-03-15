function something(number) {
  if (number <= 0) return 1;
  else return number * something(number - 1);
}
console.log(something(4));
