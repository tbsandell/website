function sol1() {
  let limit = 4000000, fib0 = 0, fib1 = 1, sum = 0, temp = 0;
  while (fib1 < limit) {
    if (fib1 % 2 == 0)
      sum += fib1;
    temp = fib0;
    fib0 = fib1;
    fib1 += temp;
  }
  return sum;
}

function sol2() {
  let limit = 4000000, fib0 = 0, fib1 = 2, sum = 0, temp = 0;
  while (fib1 <= limit) {
    sum += fib1;
    temp = fib0;
    fib0 = fib1;
    fib1 = fib1 * 4 + temp;
  }
  return sum;
}

function sol3(){ 
  return Math.round(
    ((1 + Math.sqrt(5)) * ((2 - Math.sqrt(5)) ** 12) - 
      (1 - Math.sqrt(5)) * ((2 + Math.sqrt(5)) ** 12) - 
      2 * Math.sqrt(5)) / (4 * Math.sqrt(5))
    );
}