---
cssclasses:
  - cards
  - cards-cover
  - cards-cols-4

---

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

This page was last modified at `$= dv.current().file.mtime`.

- #### 最近 #mcl/list-grid
`$=dv.list(dv.pages().sort(f=>f.file.mtime.ts,"desc").limit(5).file.link)`
- #### 随机
 `$=dv.list(dv.pages( ).sort((a, b) => Math.random() - 0.5).limit(5).file.link)`



```dataviewjs
	dv.span("**🎉 Happiness 🎉**")
	const calendarData = {
	colors: {
	pink: ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"]
	},
	entries: []
	}
	for(let page of dv.pages('"004_daily"').where(p=>p.happiness)){
	calendarData.entries.push({
	date: page.file.name,
	intensity: page.happiness,
	content: await dv.span(`[](${page.file.name})`), //for hover preview
	})
	}
	renderHeatmapCalendar(this.container, calendarData)
	
```


```dataviewjs
dv.span("🌙 不熬夜 🌟")
const calendarData = {
    colors: {
        //white: ["#BB9AB1"],
        transparent: ["transparent"],
    },
    entries: []
}
for(let page of dv.pages('"6.Daily 日周计"').where(p=>p.不熬夜)){
    calendarData.entries.push({
        date: page.file.name,
        content: await dv.span(`[🌙](${page.file.name})`), //for hover preview
    }) 
}
//console.log(calendarData)
renderHeatmapCalendar(this.container, calendarData)
```




---

---
```tracker
searchType: frontmatter
searchTarget: habit
folder: 004_daily
month:
    startDate: 2024-11-01
    endDate: 2024-12-31
    showAverage: true
```


---
[🎲 随机笔记](random-note:true)

---
```dataviewjs
const now = new Date();
dv.el("p", `🕒 ${now.toLocaleTimeString()} | 📅 ${now.toDateString()}`)
```
--- <%* await tp.file.move("/Home/Dashboard") %> ---
