---
createTime:  <% tp.file.creation_date("YYYY-MM-DD") %>
title: {{title}}
type: {{type}}
score: {{score}}
myRating: {{myRating}}
originalTitle: {{originalTitle}}
genre: {{genre}}
datePublished: {{datePublished}}
director: {{director}}
author: {{author}}
state: <%await tp.system.suggester(["done", "doing", "to-do"], ["done", "doing", "to-do"], true, 'status')%>
url: {{url}}
aliases: {{aliases}}
country: {{country}}
IMDb: {{IMDb}}
time: {{time}}
desc: {{desc}}
---

Comment: 
---
{{myComment}}
