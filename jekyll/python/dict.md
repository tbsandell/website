---
layout: python
title: Dictionary
---

Dictionary
====

Operations
----------

| Name    | Purpose   | Syntax                                         | Details                                      | Example                                 |
|---------|-----------|------------------------------------------------|----------------------------------------------|-----------------------------------------|
| Literal | Creating  | `{immutable: any, ...}`                        | Creates a `dict`                             | `{"name": "yay", "age": 8, 47: 5}`      |
| Access  | Accessing | `dict[immutable]` or `dict.string`             | Returns the value associated with a key      | `myDict["name"]` or `myDict.name`       |
| Change  | Changing  | `dict[immutable] = any` or `dict.string = any` | Adds or changes a key value pair to a `dict` | `myDict["age"] = 5` or `myDict.age = 5` |
| del     | Removing  | `del dict[immutable]`                          | Removes an item from `dict`                  | `del myDict["age"]`                     |
| for     | Looping   | `for immutable in dict:`                       | Iterates over the keys of a `dict`           | `for k in myDict`                       |
| in      | Info      | `immutable in dict`                            | Returns whether a key is in a `dict`         | `"age" in myDict`                       |

Functions
---------

| Name   | Purpose   | Syntax                | Return Type                   | Details                                           | Example                                  |
|--------|-----------|-----------------------|-------------------------------|---------------------------------------------------|------------------------------------------|
| Get    | Accessing | `dict.get(immutable)` | `any`                         | Same as Access                                    | `myDict.get("age")`                      |
| Keys   | Accessing | `dict.keys()`         | `list[immutable]`             | Returns a list of all keys in a `dict`            | `myDict.keys()`                          |
| Values | Accessing | `dict.values()`       | `list[any]`                   | Returns a list of all values in a `dict`          | `myDict.values()`                        |
| Items  | Accessing | `dict.items()`        | `list[tuple[immutable, any]]` | Returns a list of all key value pairs in a `dict` | `myDict.items()`                         |
| Copy   | Accessing | `dict.copy()`         | `dict`                        | Returns a copy of a `dict`                        | `myDict.copy()`                          |
| Update | Changing  | `dict.update(dict)`   | `None`                        | Updates the key value pairs in a `dict`           | `myDict.update({"age": 6, "fun": True})` |
| Pop    | Removing  | `dict.pop()`          | `any`                         | Removes and returns a value from a `dict`         | `myDict.remove("age")`                   |
| Clear  | Removing  | `dict.clear()`        | `None`                        | Removes every key value pair from a `dict`        | `myDict.clear()`                         |