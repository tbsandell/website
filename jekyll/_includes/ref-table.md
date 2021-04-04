| Name | Types | Syntax | Details | Example |
| ---- | ----- | ------ | ------- | ------- |
{%for item in include.content | markdownify%}| {{item[0]}} | {%h py%}{{item[1]}}{%endh%} | {%h py%}{{item[2]}}{%endh%} | {{item[3]}} | {%h py%}{{item[4]}}{%endh%} |
{%endfor%}