---
title: Select
lang: cn-ZH
---

# Select 选择器

选择组件用于从选项列表中收集用户提供的信息

## 基础用法

菜单位于其发光元素下方，除非它们靠近视口的底部

:::tip

1.  其中trigger可以控制如何触发下拉菜单，trigger: `click` | `hover`
2.  在options 中，设定 disabled 值为 true，即可禁用该选项.

:::

:::demo

select/basic

:::

## 尺寸

:::tip

1. 除了默认的大小, 可使用 `large`和`small`两种值。
2. 此外你还可以配置`clearable`来达到可以清空值。

:::

:::demo

select/size

:::

## 自定义模板

:::demo 你可以自定义如何来渲染每一个选项，将自定义的 HTML 模板插入 fb-option 的 slot 中即可。

select/custom

:::

## API

### 属性

| 属性名   | 说明                     | 类型                                   | 默认值 |
| -------- | ------------------------ | -------------------------------------- | ------ |
| tag      | 自定义元素标签           | ^[string] / ^[Component]               | button |
| type     | 类型                     | `primary` `success` `warning` `danger` | —      |
| plain    | 是否为次要按钮           | ^[boolean]                             | false  |
| ghost    | 幽灵属性，使按钮背景透明 | ^[boolean]                             | false  |
| size     | 按钮大小                 | `large` `middle` `small`               | middle |
| width    | 按钮的宽度               | ^[string] / ^[Component]               | —      |
| disabled | 按钮失效状态             | ^[boolean]                             | false  |
| loading  | 设置按钮载入状态         | ^[boolean]                             | false  |
| wave     | 是否需要波浪动效         | ^[boolean]                             | false  |
