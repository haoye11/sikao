---
<%* 
let url = 'https://www.tianqi.com/funing1/'
let res = await request({url: url,method: "GET"});
res = res.replace(/\s/g,'') 
r=/<ddclass="weather">[\s\S]*?<\/dd>/g
let data = r.exec(res)[0] 
r = /<span><b>(.*?)<\/b>(.*?)<\/span>/g
data = r.exec(data)
let weather='阜宁'+' '+data[1]+' '+data[2]
-%>
type: OKR
tags:
  - review/daily
date: <% tp.file.creation_date("YYYY-MM-DD-dddd") %>
time: <% tp.file.creation_date("HH:mm:ss") %>
weather: <% weather %>
word:
---
## DIRECTION
![[ <% tp.date.now("YYYY-ww", 0) %>#This week]]
## GET READY
### Yesterday task
- [x] [[<% tp.date.yesterday("YYYY-MM-DD") %>|Yesterday]]
![[<% tp.date.yesterday("YYYY-MM-DD") %>#Be Grateful!]]
### GTD & Top 3 Tasks
- [ ] <%tp.file.cursor()%>
- [ ] 
- [ ] 
---
- [ ] 查看知识点大纲[[专业课.canvas|专业课]] [[高数.canvas|高数]]
### Be Grateful!
> 
###  Morning Checklist

## What happened today?
### Project review
#### 梳理
- [[专业课.canvas|专业课]]
- [[高数.canvas|高数]]
#### 零碎
- [[零碎知识点]]
#### capture

## END-OF-DAY CHECKLIST

## NOTES
### Notes created today
```dataview
list
where file.cday = date(<% tp.file.creation_date("YYYY-MM-DD") %>)
sort file.ctime asc
```
### Notes modified today
```dataview
list
where file.mday = date(<% tp.file.creation_date("YYYY-MM-DD") %>)
sort file.mtime asc
```