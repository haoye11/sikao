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
await tp.file.move("/think/" + title)
-%>
title: "[[<% title %>]]"
date_creation: <% tp.file.creation_date("YYYY-MM-DD") %>
tags: <% tp.system.prompt("输入标签")%>
status: <% tp.system.suggester(["done", "reading", "to-read"], ["done", "reading", "to-read"], true, 'status')%>
---