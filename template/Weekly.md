---
type: OKR
date: <% tp.file.creation_date("YYYY-MM-DD") %>
aliases: 
tags:
  - review/weekly
---
## End-of-week checklist

- ### Get to Inbox Zero

- ### GTD Review
- [ ] Review Calendar
- [ ] Review Reminder
- [ ] Review Project
- ### Home
- [ ] Tidy room
- [ ] Tidy desk

## Monthly initiatives


> [!Attention] Pay attention to this
> Keep these things in mind as you do this week's review

![[ <% tp.date.now("YYYY-MMM") %>#This month]]

##  Last week

 ![[<% tp.date.now("YYYY-ww", -7) %>#This week]]

```dataview
table file.ctime.weekday as weekday
from "004_daily"
where file.ctime >= date(today) - dur(6 days)
```


> [!question] Questions to ask
> 1. What were your goals last week, and did you finish them?
> 2. What are you changing so that you can do them this month?

- 

## This week

> [!question] Questions to ask
> 1. If you could only get 5 specific goals done this week, what would they be?
> 2. How do they relate to your monthly initiatives and yearly OKRs?

- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 