---
layout: euler
title: Euler 03
num: 03
---
{% assign languageSwitcherId = 1 %}

> The prime factors of $13195$ are $5$, $7$, $13$ and $29$.
> What is the largest prime factor of the number $600851475143$?


Let $n_0 = x^a \times y^b \times\dots$ (where $x,y,\dots$ are prime and $a,b\dots \in \nn$) be the prime factorization of $n_0$

Let $i = 2$, check if $n_0$ is divisible by $i$

If $n_0$ is divisible by $i$, then $i$ is a prime factor of $n_0$

Else, increase $i$ by one and check again

Once you have found a prime factor, $x$, of $n_0$. let $n_1 = x^{a-1} \times y^b \times...$

You can see that the prime factorization of $n_0$ is just $x$ times the prime factorization of $n_1$

You can continue doing this until either $n_k = 1$ or $i > \sqrt{n_k}$

If $n_k = 1$, then you have found the prime factorization

If $i > \sqrt{n_k}$, then $n_k$ is the final prime factor of $n_0$