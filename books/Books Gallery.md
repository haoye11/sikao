```button
name douban
type command
action Douban: 搜索豆瓣并创建文档
color blue
```
## 卡片

```dataview
  table with ID
       ("![](" image ")") as Poster
       file.link as title
       "Auther:"+ auther as Auther
       "Type:"+ type as Type
       "Rate:"+ score as Rating
  from #book/to-do
```
