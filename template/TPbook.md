---
title: "{{title}}"
subTitle: "{{subTitle}}"
originalTitle:
  {{originalTitle}} 
series: "{{series}}"
type: "{{type}}"
作者:
  - {{author}}
发行日期: "{{datePublished}}"
translator: "{{translator}}"
出版商: "{{publisher}}"
producer: "{{producer}}"
url: "{{url}}"
总页数: "{{totalPage}}"
价格: "{{price}}"
binding: "{{binding}}"
内容简介: "{{desc}}"
封面链接: "{{imageData.url}}"
标签:
  - {{tag1}}
createTime: <% tp.file.creation_date("YYYY-MM-DD") %>
state: <%await tp.system.suggester(["done", "doing", "to-do"], ["done", "doing", "to-do"], true, 'status')%>
RGN评分: 
是否看完: 
追至进度: 
观看情况: 
书籍类型:
---


