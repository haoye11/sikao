---
cssclasses:
  - custom-cards
---

```dataview
TABLE without id  
("![test](" + 豆瓣封面 + ")") AS 封面, 
书名, 
作者 + " / "+ 出版社 + " / " + dateformat(出版时间, "yyyy-MM") AS 书籍信息, 
评星 + "  " + 评分 AS 评分,
摘要
FROM ""
where 书名
```
