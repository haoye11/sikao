---
createTime:  <% tp.file.creation_date("YYYY-MM-DD") %>
title: {{title}}
type: {{type}}
author: {{author}}
score: {{score}}
myRating: {{myRating}}
datePublished: {{datePublished}}
translator: {{translator}}
publisher: {{publisher}}
isbn: {{isbn}}
url: {{url}}
totalPage: {{totalPage}}
price: {{price}}
tags: {{myTags}}
state: <%await tp.system.suggester(["done", "doing", "to-do"], ["done", "doing", "to-do"], true, 'status')%>
desc: {{desc}}
---





