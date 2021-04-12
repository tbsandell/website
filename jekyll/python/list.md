---
layout: python
title: List
---

List
====

Operations
----------

| Name            | Purpose   | Syntax              | Details                                                | Example                |
|-----------------|-----------|---------------------|--------------------------------------------------------|------------------------|
| Literal         | Creating  | `[any, any, ...]`   | Returns a new `list` with the given items              | `['hello', 2, 'u']`    |
| Access          | Accessing | `list[int]`         | Returns a value at some index                          | `myList[3]`            |
| Negative Access | Accessing | `list[int]`         | Equivalent to `l[len(l) - i]`                          | `myList[-2]`           |
| Slice           | Accessing | `list[int:int]`     | Returns a slice from the `list`                        | `myList[2:4]`          |
| Add             | Creating  | `list + list`       | Returns the concatenation of two `list`s               | `[1,7,4] + [2,7]`      |
| Multiply        | Creating  | `list * int`        | Returns a `list` concatenated to itself multiple times | `[1,6,3] * 3`          |
| del             | Removing  | `del list[int]`     | Removes an item from a `list`                          | `del myList[3]`        |
| del Range       | Removing  | `del list[int:int]` | Removes a range of items from a `list`                 | `del myList[2:5]`      |
| in              | Info      | `any in list`       | Returns whether an item is in a `list`                 | `"name" in myList`     |
| not in          | Info      | `any not in list`   | Returns whether an item is not in a `list`             | `"name" not in myList` |

Functions
---------

| Name    | Purpose  | Syntax                                   | Returns | Details                                                       | Example                        |
|---------|----------|------------------------------------------|---------|---------------------------------------------------------------|--------------------------------|
| list    | Creating | `list(iterable)`                         | `list`  | Returns a `list` made from some `iterable`                    | `list((4, 7, "yay"))`          |
| Copy    | Creating | `list.copy()`                            | `list`  | Returns a copy of a `list`                                    | `myList.copy()`                |
| Append  | Changing | `list.append(any)`                       | `None`  | Appends an item to the end of a `list`                        | `myList.append("hello")`       |
| Insert  | Changing | `list.insert(int, any)`                  | `None`  | Inserts an item into a `list`                                 | `myList.insert(3, "name")`     |
| Extend  | Changing | `list.extend(iterable)`                  | `None`  | Appends the elements of an `iterable` to a `list`             | `myList.extend([3,7,"yay"])`   |
| Sort    | Changing | `list.sort()` or `list.sort(key = func)` | `None`  | Sorts a `list` alphanumerically or with the provided function | `myList.sort(key = str.upper)` |
| Reverse | Changing | `list.reverse()`                         | `None`  | Reverses a `list`                                             | `myList.reverse()`             |
| Remove  | Removing | `list.remove(any)`                       | `None`  | Removes an item from a `list`                                 | `myList.remove("yay")`         |
| Pop     | Removing | `list.pop(int)`                          | `any`   | Removes and returns an item at some index                     | `myList.pop(3)`                |
| Clear   | Removing | `list.clear()`                           | `None`  | Removes all items from a `list`                               | `myList.clear()`               |
| Count   | Info     | `list.count(any)`                        | `int`   | Returns how many copies of an object are in a `list`          | `myList.count("yay")`          |

Examples
--------

```py
>>> myList = [3, 7, 4, 9, 2]
>>> myList[1]
7
>>> myList[-1]
2
>>> myList[2:]
[]
```