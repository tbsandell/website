---
layout: euler
title: Euler 01
num: 01
---
{% assign languageSwitcherId = 1 %}
> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
> The sum of these multiples is 23.
> 
> Find the sum of all the multiples of 3 or 5 below 1000.


The naive method would be to iterate through all numbers less than 1000 and sum up the ones that are divisible by 3 or 5

{% include eulerSolution.html num=1 languages="js,cpp,py" %}

There are also various optimizations that can be done in lower level languages, such as iterating towards zero.

{% include eulerSolution.html num=2 languages="cpp" %}

This algorithm runs in $O(n)$, which isn't bad. However, there is a better method.

The sum of all multiples of 3 or 5 below 1000 is
$(3 + 5 + 6 + 9 + 10 + 12 + 15 + ... + 995 + 996 + 999)$
which is fairly close to the sum of all multiples of 3 added to the sum of all multiples of 5
$(3 + 6 + 9 + 12 + 15 + ... + 996 + 999) + (5 + 10 + 15 + ... + 995)$

The only problem is that the multiples of 15 are duplicated.
To get around this, we can subtract all the multiples of 15 from the sum
$(3 + 6 + 9 + 12 + 15 + ... + 996 + 999) + (5 + 10 + 15 + ... + 995) - (15 + 30 + ... + 990)$
which after factoring becomes
$3(1 + 2 + 3 + 4 + 5 + ... + 332 + 333) + 5(1 + 2 + 3 + ... + 199) - 15(1 + 2 + ... + 66)$
Then, recall that the sum of the numbers from $ 1 $ to $ n $ is
$\sum_{i=1}^n i = {n(n+1) \over 2}$

Therefore the solution is
$3 {333 (333 + 1) \over 2} + 5 {199 (199 + 1) \over 2} - 15 {66 (66 + 1) \over 2} = 233168$