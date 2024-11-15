---
<%* 
let url = 'https://www.tianqi.com/funing1/'
let res = await request({url: url,method: "GET"});
res = res.replace(/\s/g,'') 
r=/<ddclass="weather">[\s\S]*?<\/dd>/g
let data = r.exec(res)[0] 
r = /<span><b>(.*?)<\/b>(.*?)<\/span>/g
data = r.exec(data)
let weather='阜宁'+' '+data[1]+' '+data[2]
-%>
type: OKR
tags:
  - review/daily
date: <% tp.file.creation_date("YYYY-MM-DD-dddd") %>
time: <% tp.file.creation_date("HH:mm:ss") %>
weather: <% weather %>
word:
---
## DIRECTION
![[ <% tp.date.now("YYYY-ww", 0) %>#This week]]
## GET READY
### Yesterday task
- [x] [[<% tp.date.yesterday("YYYY-MM-DD") %>|Yesterday]]
![[<% tp.date.yesterday("YYYY-MM-DD") %>#Be Grateful!]]
### GTD & Top 3 Tasks
- [ ] <%tp.file.cursor()%>
- [ ] 
- [ ] 
---
- [ ] 查看知识点大纲[[专业课.canvas|专业课]] [[高数.canvas|高数]]
### Be Grateful!
> 
###  Morning Checklist
- [ ] 喝水
- [ ] 简单锻炼并冥想10分钟
- [ ] 整理书桌
- [ ] 日历翻页
- [ ] 杂务（洗衣）

## What happened today?
### Project review
> [!important] Prompt
> 今天关于项目的内容，请按照以下步骤进行复盘: 
> 1.回顾目标 2.叙述过程（5W1H）3.评估结果（SWOT）4.分析原因 （5WHYs） 5.推演规律  6.记录归档   
>  数学复盘考虑三点：
> 1.这题为什么这样写 2.是否有其他解法 3.写的时候有什么细节要注意
#### 大纲梳理
- [[专业课.canvas|专业课]]
- [[高数.canvas|高数]]
#### 零碎
- [[零碎知识点]]
#### capture

### About Today

#### win

#### struggle


## END-OF-DAY CHECKLIST
- [ ] GTD
- [ ] 单词复习
- [ ] review today
- [ ] Back Up
	- [ ] Time Machine
	- [ ] Obsidian Vault
- [ ] 整理书桌
- [ ] 查看抖音，qq消息

## HABIT TRACKER

```dataviewjs
dv.span("**word**")  // 这里需要修改
const calendarData = {
    year: 2024,  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
        blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"daily"').where(p => p.word)) {
    //dv.span("<br>" + page.file.name) 这里需要修改// uncomment for troubleshooting
    calendarData.entries.push({
        date: page.file.name,     // (required) Format YYYY-MM-DD
        intensity: page.word, // (required) the data you want to track, will map color intensities automatically 这里需要修改
        content: "",           // (optional) Add text to the date cell
        color: "orange",          // (optional) Reference from 这里改成自己需要的颜色*calendarData.colors*. If no color is supplied; colors[0] is used
    })
}

renderHeatmapCalendar(this.container, calendarData)
```


## NOTES

> [!caution] 注意
> 这边dataview报错不用担心，因为我在中间写了一句templater的语句，套用模板的时候会自动变成当天日期，这个dataview语句就可以正常运作了
### Notes created today
```dataview
list
where file.cday = date(<% tp.file.creation_date("YYYY-MM-DD") %>)
sort file.ctime asc
```
### Notes modified today
```dataview
list
where file.mday = date(<% tp.file.creation_date("YYYY-MM-DD") %>)
sort file.mtime asc
```