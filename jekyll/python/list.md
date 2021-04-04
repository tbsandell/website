---
layout: default
title: List
operations:
  - - List literal
    - "[any, any, ..., any]"
    - "[e_1, e_2, ..., e_n]"
    - Returns a list with the objects {%h py%}e_1{%endh%} through {%h py%}e_n{%endh%}
    - "['hello', 2, 'u']"
  - - Access
    - list[int]
    - l[i]
    - Returns the element at index {%h py%}i{%endh%}
    - myList[3]
  - - Negative Access
    - list[int]
    - l[-i]
    - Equivalent to {%h py%} l[len(l)-i] {%endh%}
    - myList[-2]
  - - Slice
    - list[int:int]
    - l[i:j]
    - Returns the elements at indexes {%h py%}i{%endh%} through {%h py%}j{%endh%}
    - myList[2:4]
  - - Slice with skip
    - list[int:int:int]
    - l[i:j:k]
    - Returns the elements at indexes {%h py%}i + kn{%endh%} until {%h py%}j{%endh%}
    - myList[3:7:2]
  - - Add
    - list + list
    - myList1 + myList2
    - Returns the union of two lists
    - "[1,7,4] + [2,7]"
  - - Multiply
    - list * int
    - myList * i
    - Returns {%h py%}myList + myList + ...{%endh%} {%h py%}i{%endh%} times
    - "[1,6,3] * 3"

functions:
  - - Append
    - list.append(any)
    - l.append(obj)
    - Appends {%h py%}obj{%endh%} to the end of {%h py%}l{%endh%}
    - myList.append("hello")
---

List
====

Operations
----------
{% capture my_include %}{% include ref-table.md content=page.operations %}{% endcapture %}
{{ my_include | liquify | markdownify }}

Functions
---------
{% capture my_include %}{% include ref-table.md content=page.functions %}{% endcapture %}
{{ my_include | liquify | markdownify }}