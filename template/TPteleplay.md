---
title: "{{title}}"
subTitle: "{{subTitle}}"
originalTitle:
  {{originalTitle}} 
series: "{{series}}"
type: "{{type}}"
作者:
  {{author}}
发行日期: "{{datePublished}}"
producer: "{{producer}}"
内容简介: {{desc}}
封面链接: "{{imageData.url}}"
genre: {{genre}}
director: {{director}}
actor: {{actor}}
author: {{author}}
url: "{{url}}"
country: {{country}}
language: {{language}}
标签:
  - {{tag3}}
createTime: <% tp.file.creation_date("YYYY-MM-DD") %>
state: <%await tp.system.suggester(["done", "doing", "to-do"], ["done", "doing", "to-do"], true, 'status')%>
---


