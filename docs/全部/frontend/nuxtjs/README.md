---
title: 快速上手 NuxtJS
date: 2021-07-16 01:28:36
permalink: /pages/46ea78/
categories: 
  - 全部
  - frontend
  - nuxtjs
tags: 
  - 
---

## 使用模板快速开始

```bash
# 根据你的需求进行选择
yarn create nuxt-app nuxt-test
```



## 使用想法

NuxtJS 是一个重约定的框架。

### components

可以有目录结构：

```bash
components
├── Component-1.vue
└── Menu
    └── Component-2.vue
```

引入时：

```vue
<MenuComponent-2 />
```

### layouts

可以有目录结构：

```bash
layouts
└── 10
    └── 1
        └── default.vue
```

引入时：

```js
export default {
	layout: '10/1/default'
}
```

### pages 动态路由

使用下划线为动态路由：

```bash
pages
├── games
│   └── _module
│       └── _id.vue
```

相当于 `/games/:module/:id`。



## 参考资料

+ [NuxtJS](https://nuxtjs.org/)

