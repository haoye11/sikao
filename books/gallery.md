```button
name douban
type command
action Douban: 搜索豆瓣并创建文档
color blue
```

```dataview
table without id
"![]("+ 封面 +")" as 封面，
file.link as 书名
from "books/book"
```
