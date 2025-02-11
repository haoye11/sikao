---
<%*
let title = tp.file.title;
if (title.startsWith("Untitled")) {
 title = await tp.system.prompt("Enter the title of the book");
 if(!title) return;
}
if (title == "") {
title = "Untitled";
} else {
await tp.file.rename(title);
}
await tp.file.move("/001_knowledge/books/book/" + title)
-%>
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
## Conclusion
> [!info]- 3 sentences to describe the book
> 1.输出书中内容，提取主旨
> 2.记录有感触的点并吸收借鉴

## Clippings

## Others
> [!note]- from
> 1.其他app中评价
> 2.替补
> 3.1