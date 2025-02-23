---
cssclasses:
  - cards
  - cards-cover
  - cards-cols-4
---

---
```dataview
Table without ID
	"<img src='" + 封面链接 + "' height= '250' style='width:auto; border-radius: 6px' >" as cover,
	file.link as 书名,
	标签,
	发行日期
From "001_knowledge/books/book"
```
