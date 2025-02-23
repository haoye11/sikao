```dataviewjs
const now = new Date();
dv.el("p", `🕒 ${now.toLocaleTimeString()} | 📅 ${now.toDateString()}`)
```
`BUTTON[theme]` `BUTTON[todo]` `BUTTON[gallery]` 
```meta-bind-button
label: theme
icon: switch
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: theme
hidden: true
actions:
  - type: command
    command: obsidian-minimal-settings:toggle-minimal-switch

```
```meta-bind-button
label: todo
icon: list
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: todo
hidden: true
actions:
  - type: command
    command: obsidian-tasks-plugin:edit-task

```

```meta-bind-button
label: gallery
icon: book
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: gallery
hidden: true
actions:
  - type: command
    command: obsidian-douban-plugin:searcher-douban-import-and-create-file

```
### 最近 
```dataview
TABLE without id
    file.link  AS "文档标题",
    ("🗓️" + dateformat(file.cday, "MM-dd EEE")) AS "创建日期",
    ("⏱️" + default(dateformat(file.ctime, "HH:mm"), "--:--")) AS "创建时间",
    choice(
    length(file.tags) > 0, 
    "🏷️" + file.tags[0], 
    "🈚标签"
) AS "标签"
WHERE
    file.cday >= date(now) - dur(60 day)
    AND !startswith(file.folder, "_")
    AND !contains(file.path, "template")
    AND !contains(file.path, "001_knowledge/外刊/单词")
SORT 
    file.cday DESC
LIMIT 5
```
### tasks
```tasks
heading includes GTD & Top 3 Tasks
path includes 000_年月日/004_daily
scheduled on today
```
```tasks
due on today
```



```dataviewjs
	dv.span("**🎉 word 🎉**")
	const calendarData = {
	year:2025,
	colors: {
	pink: ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
	blue: ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
	green: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
	red:  ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
	orange:  ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
	orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
	},
	showCurrentDayBorder: true, // (optional) defaults to true
	defaultEntryIntensity: 4,   // (optional) defaults to 4
	intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
	intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
	entries: [],   // (required) populated in the DataviewJS loop below
	}
	for(let page of dv.pages('"000_年月日/004_daily"').where(p=>p.word)){
	calendarData.entries.push({
	date: page.file.name,// (required) Format YYYY-MM-DD
	intensity: page.word,// (required) the data you want to track, will map color intensities automatically
	content: await dv.span(`[](${page.file.name})`), //for hover preview.// (optional) Add text to the date cell    
	color: "pink",          // (optional) Reference from *calendarData.colors*. If no color is supplied; colors[0] is used
	})
}
	renderHeatmapCalendar(this.container, calendarData)
	
```

```dataviewjs
	dv.span("**🎉 阅读时间 🎉**")
	const calendarData = {
	year:2025,
	colors: {
	pink: ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
	blue: ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
	green: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
	red:  ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
	orange:  ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
	orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
	},
	showCurrentDayBorder: true, // (optional) defaults to true
	defaultEntryIntensity: 4,   // (optional) defaults to 4
	intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
	intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
	entries: [],   // (required) populated in the DataviewJS loop below
	}
	for(let page of dv.pages('"000_年月日/004_daily"').where(p=>p.阅读)){
	calendarData.entries.push({
	date: page.file.name,// (required) Format YYYY-MM-DD
	intensity: page.阅读,// (required) the data you want to track, will map color intensities automatically
	content: await dv.span(`[](${page.file.name})`), //for hover preview.// (optional) Add text to the date cell    
	color: "orangeToRed",          // (optional) Reference from *calendarData.colors*. If no color is supplied; colors[0] is used
	})
}
	renderHeatmapCalendar(this.container, calendarData)
	
```

```dataviewjs
	dv.span("**🎉 锻炼时间 🎉**")
	const calendarData = {
	year:2025,
	colors: {
	pink: ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
	blue: ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
	green: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
	red:  ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
	orange:  ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
	orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
	},
	showCurrentDayBorder: true, // (optional) defaults to true
	defaultEntryIntensity: 4,   // (optional) defaults to 4
	intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
	intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
	entries: [],   // (required) populated in the DataviewJS loop below
	}
	for(let page of dv.pages('"000_年月日/004_daily"').where(p=>p.举哑铃)){
	calendarData.entries.push({
	date: page.file.name,// (required) Format YYYY-MM-DD
	intensity: page.举哑铃,// (required) the data you want to track, will map color intensities automatically
	content: await dv.span(`[](${page.file.name})`), //for hover preview.// (optional) Add text to the date cell    
	color: "green",          // (optional) Reference from *calendarData.colors*. If no color is supplied; colors[0] is used
	})
}
	renderHeatmapCalendar(this.container, calendarData)
	
```


