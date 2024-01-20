---
title: Input
lang: cn-ZH
---

# Input 输入框

输入框允许用户在 UI 中输入文本, 它们通常出现在表单和对话框中

## 基础用法

:::demo 你可以配置`clearable`来清空输入框的值

input/basic

:::

## 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件

input/disabled

:::

## 限制输入格式

:::demo 使用 allow-input 限制输入框的输入格式，你可以使用它来达到修饰的效果

input/format

:::

## 前缀和后缀

:::demo 在输入框上添加前缀或后缀图标。

input/icon

:::

## 带标签的

在输入框上添加前缀或后缀标签，需要自己写一点点代码
:::demo 保持组件的简洁性，维护性; 组件内部不处理一些非输入框的需求。

input/label

:::

## 文本域

:::demo 添加 `type="textarea"` 属性, 用于多行输入。

input/textarea

:::

## 尺寸

:::demo 除了默认的大小, 可使用 `large`和`small`两种值

input/size

:::

## API

### Select props

| 属性名        | 说明                                                     | 类型                                                             | 默认值  |
| ------------- | -------------------------------------------------------- | ---------------------------------------------------------------- | ------- |
| v-model       | 选中项绑定值                                             | ^[string] / ^[number]                                            | —       |
| placeholder   | 占位符                                                   | ^[string]                                                        | 请选择  |
| clearable     | 是否可以清空选项                                         | ^[boolean]                                                       | false   |
| disabled      | 是否禁用                                                 | ^[boolean]                                                       | false   |
| multiple      | 是否多选（todo）                                         | ^[boolean]                                                       | false   |
| dropdownStyle | 下拉菜单的 style 属性                                    | ^[CSSProperties]                                                 | —       |
| transition    | 下拉菜单的动画name（遵循vuejs transition内置组件的name） | ^[string]                                                        | —       |
| placement     | 下拉菜单弹出位置                                         | `top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` | bottom  |
| trigger       | 触发方式                                                 | `hover` `click`                                                  | click   |
| isTrigger     | 是否把菜单放到触发器节点下面，默认放到body               | ^[boolean]                                                       | false   |
| suffixIcon    | 自定义后缀图标组件                                       | ^[string] / ^[Component]                                         | —       |
| clearIcon     | 自定义清除图标组件                                       | ^[string] / ^[Component]                                         | —       |
| size          | 大小                                                     | `large` `default` `small`                                        | default |

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
