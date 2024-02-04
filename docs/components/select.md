---
title: Select
lang: cn-ZH
---

# Select 选择器

选择组件用于从选项列表中收集用户提供的信息

## 基础用法

菜单位于其发光元素下方，除非它们靠近视口的底部。

:::demo 在options 中，设定 disabled 值为 true，即可禁用该选项。

select/basic

:::

## 自定义菜单项

:::demo 你可以自定义如何来渲染每一个选项，将自定义的 HTML 模板插入 fb-option 的 slot 中即可。

select/custom

:::

## 多选

多选选择器使用 tag 组件来展示已选中的选项。
:::demo 设置 multiple 属性即可启用多选， 此时 v-model 的值为当前选中值所组成的数组

select/multiple

:::

## 尺寸

:::tip

1. 除了默认的大小, 可使用 `large`和`small`两种值。
2. 此外你还可以配置`clearable`来达到可以清空值。
3. 你还可以设置`disabled`来禁用select

:::

:::demo

select/size

:::

## 自定义触发器

你可以自定义触发器，来实现文本选择模式
:::demo 其中trigger可以控制如何触发下拉菜单，trigger: `click` | `hover`

select/trigger

:::

## API

### Select props

| 属性名                | 说明                                                     | 类型                                                             | 默认值  |
| --------------------- | -------------------------------------------------------- | ---------------------------------------------------------------- | ------- |
| model-value / v-model | 选中项绑定值                                             | ^[string] / ^[number]                                            | —       |
| placeholder           | 占位符                                                   | ^[string]                                                        | 请选择  |
| clearable             | 是否可以清空选项                                         | ^[boolean]                                                       | false   |
| disabled              | 是否禁用                                                 | ^[boolean]                                                       | false   |
| multiple              | 是否多选（todo）                                         | ^[boolean]                                                       | false   |
| dropdownStyle         | 下拉菜单的 style 属性                                    | ^[CSSProperties]                                                 | —       |
| transition            | 下拉菜单的动画name（遵循vuejs transition内置组件的name） | ^[string]                                                        | —       |
| placement             | 下拉菜单弹出位置                                         | `top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` | bottom  |
| trigger               | 触发方式                                                 | `hover` `click`                                                  | click   |
| isTrigger             | 是否把菜单放到触发器节点下面，默认放到body               | ^[boolean]                                                       | false   |
| suffixIcon            | 自定义后缀图标组件                                       | ^[string] / ^[Component]                                         | —       |
| clearIcon             | 自定义清除图标组件                                       | ^[string] / ^[Component]                                         | —       |
| size                  | 大小                                                     | `large` `default` `small`                                        | default |
| wave                  | 当触发器是input(默认)时，是否需要获取焦点波浪效果        | ^[boolean]                                                       | true    |

### Select Events

| 属性名 | 说明                 | 类型                               |
| ------ | -------------------- | ---------------------------------- |
| change | 选中值发生变化时触发 | ^[Function] `(value: any) => void` |

### Option props

| 属性名   | 说明         | 类型                  | 默认值 |
| -------- | ------------ | --------------------- | ------ |
| value    | 选中项绑定值 | ^[string] / ^[number] | —      |
| label    | 选项上的标签 | ^[string]             | —      |
| disabled | 是否禁用     | ^[boolean]            | false  |
