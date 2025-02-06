---
<%*
let title = tp.file.title;
if (title.startsWith("Untitled")) {
 title = await tp.system.prompt("Enter the title");
 if(!title) return;
}
if (title == "") {
title = "Untitled";
} else {
await tp.file.rename(title);
}
await tp.file.move("/006_think/little/随感/"+ title)
-%>
title: "[[<% title %>]]"
date_creation: <% tp.file.creation_date("YYYY-MM-DD") %>
date_modified: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm") %>
tags:
  - 杂谈
---
## What and how 
> [!tip]+ tip
> write dowm what happened and express that thing how to influence your moods

## The reason
> [!abstract]+ reason
> Youneed to think the reason why you feel different and 
> write dowm whether the change of mood is necessary .
>  

## The initiatives 
> [!todo]+ solution
> think what you can learn from this,and when the similar accident you will how to behave?

