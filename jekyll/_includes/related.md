
{% if include.related[0] %}
### Related
{% endif %}

{% for related in include.related %}
  {% for t in site.theorems %}
    {% if t.title == related %}
- <a href="{{ t.url | relative_url }}">{{ related }}</a>
    {% endif %}
  {% endfor %}
  {% for d in site.definitions %}
    {% if d.title == related %}
- <a href="{{ d.url | relative_url }}">{{ related }}</a>
    {% endif %}
  {% endfor %}
{% endfor %}