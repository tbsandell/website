#include <iostream>
#include <cmath>

int sol1() {
  int limit = 4000000, fib0 = 0, fib1 = 1, sum = 0, temp = 0;
  while (fib1 < limit) {
    if (fib1 % 2 == 0)
      sum += fib1;
    temp = fib0;
    fib0 = fib1;
    fib1 += temp;
  }
  return sum;
}

int sol2() {
  int limit = 4000000, fib0 = 0, fib1 = 2, sum = 0, temp = 0;
  while (fib1 <= limit) {
    sum += fib1;
    temp = fib0;
    fib0 = fib1;
    fib1 = fib1 * 4 + temp;
  }
  return sum;
}

int sol3() { 
  return round(
   ((1 + sqrt(5)) * (pow(2 - sqrt(5), 12)) - 
    (1 - sqrt(5)) * (pow(2 + sqrt(5), 12)) - 
     2 * sqrt(5)) / (4 * sqrt(5))
   );
 }

int main() {
  std::cout << sol1() << std::endl;
  std::cout << sol2() << std::endl;
  std::cout << sol3() << std::endl;
  return 0;
}