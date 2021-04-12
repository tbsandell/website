function sol1() {
  let num = 600851475143;
  let factors = [];
  for (let i = 2; i < num; i++) {
    
  }
}

function sol2() {
  let num = 600851475143;
  let factors = [];
  for (let i = 2; num > 1; i++)
    if (num % i == 0) {
      num /= i;
      factors.push(i--);
    }
  return(factors.sort((a,b) => a < b).pop());
}