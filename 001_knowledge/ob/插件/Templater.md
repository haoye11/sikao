---
type: Template
tags:
  - ob插件
  - 模板
date: 2024-10-07
source: 
- https://github.com/SilentVoid13/Templater 
- https://silentvoid13.github.io/Templater/internal-functions/internal-modules/date-module.html
description:
---
### 介绍
以<% %>作为命令，函数是我们可以在命令中调用并返回值(替换字符串)的对象
Templater 的所有函数，无论是内部函数还是用户函数，都可以在 tp 对象下使用。可以说，我们的所有函数都是 tp 对象的子对象。要访问对象的“子对象”，我们必须使用点符号。
### 例子
#### tp.date
1. <% tp.date.now%>
2. 
3. tp.date.now(format: string = "YYYY-MM-DD", offset?: number|string, reference?: string, reference_format?: string)