```button
name douban
type command
action Douban: 搜索豆瓣并创建文档
color blue
```
### 书架
```dataview
Table without ID
	title,
	标签,
	"![]("+ 封面链接 + ")" as cover,
	file.link as 书名
From "books/book"
```
