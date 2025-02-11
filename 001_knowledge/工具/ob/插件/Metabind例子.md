---
tags:
  - 例子
  - metabind
select: a
select2: 
select3: 1 hour
select4: foo
toggle2: 0
toggle1: true
time: 13:05
date2: 2024-09-05
date1: 2025-02-10
dateTime: 2024-03-13T15:07
progress1: -6
progress2: 0.7
progress3: 6
progress4: 2.6
progress5: 60
progress6: 75
bind_target: false
slider1: 38
slider2: 14
slider3: 476
slider4: 2.6
select5: 3
select6: 2
multiSelect:
  - option 1
  - option 3
multiSelect2:
  - option 1
  - option 3
multiSelect3:
  - 1
  - 
  - false
list:
  - apple
  - banana
  - berries
  - https://github.com/
  - apple
list2:
  - "[[Other/Example Notes/Example Note with Image.md|Example Note with Image]]"
  - "[[Other/Example Notes/Example Note with Callouts.md|Example Note with Callouts]]"
list3:
  - Example Note with Image
  - Example Note with Callouts
  - Example Note with Embeds
list4:
  - Example Note with Callouts
  - Example Note with Embeds
  - Example Note with Embeds
list5:
  - "[[Other/Example Notes/Example Note with Embeds.md|Example Note with Embeds]]"
  - "[[Other/Example Notes/Example Note with Callouts.md|Example Note with Callouts]]"
list6:
  - "12"
number: 
number2: 123
number3: 
---

```meta-bind
INPUT[number(showcase):number]
```

```meta-bind
INPUT[number(showcase):number2]
```

```meta-bind
INPUT[number(showcase, placeholder(test), defaultValue(-1)):number3]
```

```meta-bind
INPUT[number(showcase, placeholder(test), defaultValue(null)):number4]
```

### List

```meta-bind
INPUT[list(showcase):list]
```

`VIEW[{list}][link]`

```meta-bind
INPUT[list(showcase, multiLine):list]
```

### List Suggester

```meta-bind
INPUT[listSuggester(optionQuery(#example-note), showcase):list2]
```

`VIEW[{list2}][link]`

```meta-bind
INPUT[listSuggester(optionQuery(#example-note), useLinks(false), showcase):list3]
```

`VIEW[{list3}][link]`

### Inline List

Some text: `INPUT[inlineList:list5]` some more text

### Inline List Suggester

```meta-bind
INPUT[inlineListSuggester(optionQuery(#example-note), option(something, other), useLinks(false), showcase):list4]
```

Some text: `INPUT[inlineListSuggester(optionQuery(#example-note), option(something, other), useLinks(false)):list4]` some more text

`INPUT[inlineListSuggester(optionQuery(#example-note), option(something, other), allowOther):list5]` 

### Null Values

```meta-bind
INPUT[list(showcase):list6]
```

### Select

```meta-bind
INPUT[select(
option(1, option 1), 
option(2, option 2), 
option(3, option 3), 
showcase
):select5]
```

```meta-bind
INPUT[select(
option(1, option 1), 
option(false, option 2), 
option(null, option 3), 
showcase
):select6]
```

```meta-bind
INPUT[select(
option(1, option 1), 
option(2, option 2), 
option(3, option 3), 
option(3, option 3), 
option(2, option 2), 
showcase
):select3]
```

### Multi Select

```meta-bind
INPUT[multiSelect(
option(option 1), 
option(option 2), 
option(option 3), 
option(option 3), 
option(option 2), 
showcase
):multiSelect2]
```

```meta-bind
INPUT[multiSelect(
option(1, option 1), 
option(false, option 2), 
option(null, option 3), 
showcase
):multiSelect3]
```

### Simple Slider

```meta-bind
INPUT[slider(showcase):slider1]
```

### Slider with Labels

```meta-bind
INPUT[slider(addLabels, showcase):slider1]
```

### Slider with Custom Min Max Values

```meta-bind
INPUT[slider(addLabels, minValue(-20), maxValue(20), showcase):slider2]
```

```meta-bind
INPUT[slider(addLabels, minValue(0), maxValue(1000), showcase):slider3]
```

### Slider with Custom Step Size

```meta-bind
INPUT[slider(addLabels, minValue(0), maxValue(10), stepSize(0.1), showcase):slider4]
```

```meta-bind
INPUT[progressBar(showcase, minValue(-10), maxValue(3)):progress1]
```

```meta-bind
INPUT[progressBar(showcase, minValue(0), maxValue(1), stepSize(0.1)):progress2]
```

```meta-bind
INPUT[progressBar(showcase, minValue(0), maxValue(10), stepSize(-1)):progress3]
```

```meta-bind
INPUT[progressBar(showcase, minValue(0), maxValue(10), stepSize(0.1)):progress4]
```

The labels can be hidden if they are not required.

```meta-bind
INPUT[progressBar(defaultValue(53), addLabels(false)):progress5]
```
With some css-snippets we can change the color of the progress bar.

```meta-bind
INPUT[progressBar(defaultValue(53), class(red-progress-bar)):progress6]
```

### Date
```meta-bind
INPUT[date(showcase):date1]
```

### Date Picker

```meta-bind
INPUT[datePicker(showcase(value:false)):date2]
```

```meta-bind
INPUT[datePicker(showcase, defaultValue(null)):date3]
```

### Time
```meta-bind
INPUT[time(showcase):time]
```


### Date Time
```meta-bind
INPUT[dateTime(showcase):dateTime]
```

`INPUT[dateTime:dateTime]`
```meta-bind
INPUT[toggle(showcase):toggle1]
```

```meta-bind
INPUT[toggle(showcase, onValue(1), offValue(0), defaultValue(1)):toggle2]
```


```meta-bind
INPUT[inlineSelect(option(a), option(b), showcase):select]
```

```meta-bind
INPUT[inlineSelect(option(1, a), option(2, b), showcase):select2]
```

```meta-bind
INPUT[inlineSelect(option(1 hour, a), option(2 hours, b), showcase):select3]
```

```meta-bind
INPUT[inlineSelect(option(null, nothing), option(foo, something), showcase):select4]
```

`INPUT[toggle(title(this is a cool title)):bind_target]`