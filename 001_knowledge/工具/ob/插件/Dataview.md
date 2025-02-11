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
### 例子
#### 显示最近文件链接
>1.$=dv.list(dv.pages().sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)

>2.``dataviewjs
await dv.list(
  (await dv.pages())
    .sort(f => f.file.mtime.ts, "desc")
    .limit(5)
    .file.link
)
``

