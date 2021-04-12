def sol1():
  limit, fib0, fib1, total, temp = 4000000, 0, 1, 0, 0
  while fib1 < limit:
    if fib1 % 2 == 0:
      total += fib1
    temp = fib0
    fib0 = fib1
    fib1 += temp
  return total

def sol2():
  limit, fib0, fib1, total, temp = 4000000, 0, 2, 0, 0
  while fib1 <= limit:
    total += fib1
    temp = fib0
    fib0 = fib1
    fib1 = fib1 * 4 + temp
  return total

def sol3(): 
  return round(
    ((1 + 5 ** 0.5) * ((2 - 5 ** 0.5) ** 12) - 
      (1 - 5 ** 0.5) * ((2 + 5 ** 0.5) ** 12) - 
      2 * 5 ** 0.5) / (4 * 5 ** 0.5)
    )

if __name__ == "__main__":
  print(sol1())
  print(sol2())
  print(sol3())