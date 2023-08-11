---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
---

# 实现一个Emoji 3D 表情切换效果

<!-- ./components/GenerateEmoji.vue -->
<GenerateEmoji />

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---
<!-- ./components/CompleteEmoji.vue -->
<CompleteEmoji />
---
transition: fade-out
layout: two-cols
---
<template v-slot:default>

<TextEmoji />

</template>
<template v-slot:right>

# code示例
```ts
String.fromCodePoint(0x1f600) // 😀
```
<CodeEmoji />
</template>

---
transition: fade-out
layout: two-cols
---
<template v-slot:default>

<ThreeText />

</template>
<template v-slot:right>

# 实现步骤

<v-click>

###### 绘制基础文本
```vue
<template><div class="a">NVX</div></template>
<style>.a {color: #fff;background: #999;}</style>
```
<div style="color: #fff; background: #999;text-align: center;margin: 5px 0; font-size: 30px;">NVX</div>

</v-click>
<v-click>

###### 添加文本阴影
```vue
<template><div class="b">NVX</div></template>
<style>.b {color: #999;background: #999;text-shadow: 1px 1px 1px #fff;}</style>
```
<div style="color: #999; background: #999;text-align: center;margin: 5px 0; font-size: 30px;text-shadow: 1px 1px 1px #fff;">NVX</div>
</v-click>
<v-click>

###### 添加立体阴影效果
```vue
<template><div class="c">NVX</div></template>
<style>.c {color: #999;background: #999;text-shadow: 1px 1px 1px #fff, -1px -1px -1px #000;}</style>
```
<div style="color: #999; background: #999;text-align: center;margin: 5px 0; font-size: 30px;text-shadow: 1px 1px 1px #fff, -1px -1px 1px #000;">NVX</div>
</v-click>
</template>

---
transition: fade-in
---
# Perspective 实现 3d动画 效果
<ThreeDirection />

---
transition: fade-in
---
# 绘制 3d emoji效果
<ThreeDirectionEmoji />

---
transition: fade-in
layout: codePreview
---
<template v-slot:head>

# 随机生成 Emoji 表情
</template>
<template v-slot:right>

```ts
const genCode = () => {
  const emojiStart = 0x1f600
  const emojiEnd = 0x1f64f
  const code = Math.floor(Math.random() * (emojiEnd - emojiStart)) + emojiStart
  return String.fromCodePoint(dode)
}

const code = genCode() // 得到一个随机的 emoji 表情
```
</template>
<template v-slot:default>

# 关键函数 Math.random

<p>Math.random() 函数返回一个浮点数，伪随机数在范围从0 到小于1，也就是说，从 0（包括 0）往上，但是不包括 1（排除 1），然后您可以缩放到所需的范围。实现将初始种子选择到随机数生成算法;它不能被用户选择或重置。</p>

# 根据扩展 Math.random边界，则可以获得指定范围内的随机数
```ts
Math.random() * (max - min) + min // max 最大值， min最小值

// emoji 边界为 1f600 -> 1f64f
Matn.random() * (0x1f64f - 0x1f600) + 0x1f600 // 得到一个随机小数

// emoji对应的unicode编码应为整数，所以向下取整
Math.floor(Math.random() * (0x1f64f - 0x1f600)) + 0x1f600
```

</template>


---
transition: fade-in
---
# 随机生成 3D emoji 表情
<ThreeDirectionEmoji :random="true" />

---
transition: fade-in
layout: baseCodePreview
---
<template v-slot:head>

# 添加底部椭圆阴影
</template>
<template v-slot:default>

```html
// 绘制椭圆阴影

<div class="shadow"></div>

<style>
.shadow {
  width: 100px;
	height: 50px;
	border-radius: 50%;
	background: rgba(0, 0, 0, .5);
  // 添加阴影渐变动画
		animation: shadow .6s alternate infinite ease-in-out;
}

@keyframes shadow {
	0% { scale: 1.2; }
	40% { opacity: .7; }
	100% { scale: .5; opacity: .4; }
}
</style>
``` 
</template>

<template v-slot:right>

<div class="shadow-box">
  <div class="shadow"></div>
</div>

<style>
.shadow-box {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shadow {
  width: 100px;
	height: 50px;
	border-radius: 50%;
	background: rgba(0, 0, 0, .5);
	animation: shadow .6s alternate infinite ease-in-out;
}

@keyframes shadow {
	0% { scale: 1.2; }
	40% { opacity: .7; }
	100% { scale: .5; opacity: .4; }
}
</style>
</template>

---
transition: fade-in
---
<CompleteEmoji  :random="true"  />

---
transition: fade-in
layout: End
---

---
layout: two-cols-header
---

# hader
<template v-slot:left>

#left
</template>
<template v-slot:right>

#right
</template>