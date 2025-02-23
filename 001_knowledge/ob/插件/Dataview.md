---
type: Dataview
tags:
  - ob插件
  - 程序
  - 效率
time: 
source: https://github.com/blacksmithgu/obsidian-dataview
description:
---
### 介绍


### 例子
#### 显示最近文件链接
> [!note]- Inline Dataview JS版本
>$=dv.list(dv.pages().sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)

> [!note]- DQL版本
> TABLE file.cday AS "创建日期"
> WHERE file.cday >= date(now) - dur(7 days)
> SORT file.cday DESC
> LIMIT 5

> [!note]- 安全缓存版本
> // 安全缓存实现（需手动刷新）
> const now = moment();
> const key = "lastRefresh";
> let data = dv.current()[key] || []; 
> 
> if (data.length === 0 || now.diff(dv.current().cacheTime, 'minutes') > 60) {
>     data = dv.pages()
>         .sort(p => p.file.ctime, 'desc')
>         .limit(5)
>         .file.link;
>     dv.current()[key] = data;
>     dv.current().cacheTime = now.format(); // 记录刷新时间
> }.list(data);

#### 查询文件中高亮模块
> [!note]- 精简版
> //精简版查询当前文件
> //定义一个函数，接受一个markdown字符串作为参数
> function extractHighlight(markdown) {
>   //定义一个空数组，用来存放高亮部分
>   let highlights = [];
>   //定义一个正则表达式，匹配被==包裹的部分
>   let regex = /==(.+?)==/g;
>   //定义一个变量，用来存放正则表达式的匹配结果
>   let match;
>   //使用循环，遍历所有的匹配结果
>   while (match = regex.exec(markdown)) {
>     //把匹配结果中的第一个捕获组（也就是高亮部分）添加到数组中
>     highlights.push(match[1]);
>   }
>   //返回数组
>   return highlights.filter(p=>p!='(.+?)');
> }
> 
> dv.list(extractHighlight(await app.vault.readRaw(dv.current().file.path)))
---

---
> [!note]- 增强目标文件夹
> // 增强版单文件高亮提取代码（跳过含空行高亮）
> function extractHighlight(markdown, minLen=2) {
>   // 修改点1：正则增加换行符排除 [^=\n]
>   const regex = /==([^=\n]{2,})==/g;  // 严格排除等号和换行符
>   return [...markdown.matchAll(regex)]
>     .map(m => m[1])
>     // 修改点2：添加空白内容过滤
>     .filter(t => t.length >= minLen && !/\n\s*\n/.test(t)); // 排除包含空行
> }
> 
> // 跨文件查询核心逻辑
> const pages = dv.pages('"目标文件夹"'); // 使用dataview内置查询语法
> const results = await Promise.all( // 异步并行处理
>   pages.map(async p => ({ 
>     文件: p.file.link, // 保留文件链接
>     高亮: extractHighlight(
>       await dv.io.load(p.file.path), // 异步读取（优于readRaw）
>       3 // 设置最小长度为3
>     )
>   }))
> );
> 
> // 表格输出
> dv.table(["文件", "高亮内容"], 
>   results.flatMap(r => 
>     r.高亮.map(h => [
>       r.文件,
>       dv.span(h.trim(), { // 带样式渲染
>         style: "background: #FFF3A366; padding: 0 3px;" 
>       })
>     ])
>   )
> );

---
> [!note]- 去空格增强版当前文件
> // 增强版单文件高亮提取代码（跳过含空行高亮）
> function extractHighlight(markdown, minLen=2) {
>   // 修改点1：正则增加换行符排除 [^=\n]
>   const regex = /==([^=\n]{2,})==/g;  // 严格排除等号和换行符
>   return [...markdown.matchAll(regex)]
>     .map(m => m[1])
>     // 修改点2：添加空白内容过滤
>     .filter(t => t.length >= minLen && !/\n\s*\n/.test(t)); // 排除包含空行
> }
> 
> // 异步读取当前文件内容
> const content = await dv.io.load(dv.current().file.path);
> const highlights = extractHighlight(content, 3);
> 
> // 带样式的列表输出
> dv.list(
>   highlights.map(h => 
>     dv.span(h.trim(), {  // 修改点3：添加trim()去除首尾空白
>       style: "background: linear-gradient(90deg, #FFF3A366 0%, #FFD70022 100%);" + 
>              "border-radius: 2px;" + 
>              "padding: 0 3px;" +    // 减少横向padding
>              "margin: 0;" +         // 移除上下margin
>              "line-height: 1.4;" +  // 调整行高
>              "display: inline-block;" // 改为行内块状显示,
>     })
>   )
> );




