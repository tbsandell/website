| Name | Types | Syntax | Details | Example |
| ---- | ----- | ------ | ------- | ------- |
{%for item in include.content | markdownify%}| {{item[0]}} | {%ihighlight py%}{{item[1]}}{%endihighlight%} | {%ihighlight py%}{{item[2]}}{%endihighlight%} | {{item[3]}} | {%ihighlight py%}{{item[4]}}{%endihighlight%} |
{%endfor%}