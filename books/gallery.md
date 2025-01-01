```button
name douban
type command
action Douban: 搜索豆瓣并创建文档
color blue
```

```dataview
Table without ID
	title,
	标签,
	"![]("+ 封面链接 + ")" as cover
From "books/book"
```
