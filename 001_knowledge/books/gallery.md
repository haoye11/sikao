---
cssclasses:
  - cards
  - cards-cover
  - cards-cols-4
---

```button
name douban
type command
action Douban: 搜索豆瓣并创建文档
color blue
```
### 书架
```dataview
Table without ID	
	"![]("+ 封面链接 + ")" as cover,
	file.link as 书名,
	标签,
	发行日期
From "books/book"
```


