function sol1() {
  let limit = 1000;
  let sum = 0;
  for (let i = 0; i < limit; i++)
    if (i % 3 == 0 || i % 5 == 0)
      sum += i;
  return sum;
}

function sol2() {
  let multiplesOf3 = 3 * 333 * (333 + 1) / 2;
  let multiplesOf5 = 5 * 199 * (199 + 1) / 2;
  let multiplesOf15 = 15 * 66 * (66 + 1) / 2;
  return multiplesOf3 + multiplesOf5 - multiplesOf15;
}