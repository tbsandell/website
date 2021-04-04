---
layout: default
title: Python
---

Python
======
{% for item in site.data.navigation.python.pages %}
  <a href="{{ site.baseurl }}{{ site.data.navigation.python.prefix }}{{ item | relative_url }}">{{ item | capitalize }}</a>
{% endfor %}