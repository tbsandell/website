#include <iostream>

int sol1() {
  int limit = 1000;
  int sum = 0;
  for (int i = 0; i < limit; i++)
    if (i % 3 == 0 || i % 5 == 0)
      sum += i;
  return sum;
}

int sol2() {
  int sum = 0;
  for (int i = 1000; --i;)
    if (i % 3 == 0 || i % 5 == 0)
      sum += i;
  return sum;
}

int main() {
  std::cout << sol1() << std::endl;
  std::cout << sol2() << std::endl;
}