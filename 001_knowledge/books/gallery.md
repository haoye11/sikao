---
cssclasses:
  - cards
  - cards-cover
  - cards-cols-4
---


```button
name theme
type command
action Minimal Theme Settings: Switch between light and dark mode
color green
```

```button
name gallery
type command
action Douban: 搜索豆瓣并创建文档
```
```button
name light/dark
type command
action Minimal Theme Settings: Switch between light and dark mode
```

---
```dataview
Table without ID
	"<img src='" + 封面链接 + "' height= '250' style='width:auto; border-radius: 6px' >" as cover,
	file.link as 书名,
	标签,
	发行日期
From "001_knowledge/books/book"
```
