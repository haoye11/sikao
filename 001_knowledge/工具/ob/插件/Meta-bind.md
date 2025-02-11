---
type: metabind
tags:
  - ob插件
  - 快捷指令
time: 2025-02-07
source: https://github.com/mProjectsCode/obsidian-meta-bind-plugin
description: 

---
### 作用
可视化输入，查看数值[[Metabind例子]]

### 例子
#### 添加按钮
`BUTTON[dark-mode]` `BUTTON[light-mode]`

```meta-bind-button
label: 浅色
icon: sun
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: "light-mode"
hidden: true
actions:
  - type: command
    command: theme:use-light

```

```meta-bind-button
label: 深色
icon: moon
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: "dark-mode"
hidden: true
actions:
  - type: command
    command: theme:use-dark

```
#### 赋予文件属性值

#### 
