---
createTime:  <% tp.file.creation_date("YYYY-MM-DD") %>
title: {{title}}
subTitle: {{subTitle}}
originalTitle: {{originalTitle}}
series: {{series}}
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
state: <%await tp.system.suggester(["done", "doing", "to-do"], ["done", "doing", "to-do"], true, 'status')%>
binding: {{binding}}
desc: {{desc}}

---
cover:![image]({{image}})
Comment: 
---

## 3 sentences to describe the book
1. <% tp.file.cursor() %>
2. 
3. 

## 5 take aways
1. 
2. 
3. 
4. 
5. 

## Review



## Related



## Reference




