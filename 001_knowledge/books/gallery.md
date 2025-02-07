---
cssclasses:
  - cards
  - cards-cover
  - cards-cols-4
---
`BUTTON[douban]`
```meta-bind-button
label: gallery
icon: book
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: douban
hidden: true
actions:
  - type: command
    command: obsidian-douban-plugin:searcher-douban-import-and-create-file

```
### 书架
```dataview
Table without ID	
	"![]("+ 封面链接 + ")" as cover,
	file.link as 书名,
	标签,
	发行日期
From "001_knowledge/books/book"
```


