---
title: Prompt
lang: cn-ZH
---

# Prompt 消息弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

## 基础用法

<p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭</p>
<p>调用prompt方法，会返回一个close可主动关闭弹窗</p>

:::tip
关于onCancel事件参数描述<br/>
点击遮罩层或右上角叉或取消按钮的回调: type的值描述

1.  notBtn非按钮关闭，如点击了右上角图标，点击了蒙层
2.  cancel: 点击了取消按钮
3.  ok: 点击了确定按钮

:::

<fb-button plain @click="onPrompt">Open Prompt</fb-button>

<script lang="ts" setup>
import { ref } from "vue";
import { prompt } from "fish-bubble-design";
const onPrompt = () => {
  const { close } = prompt({
    title: "温馨提示",
    width: "600px",
    content: `Are you sure delete this task?`,
    okText: "确定",
    cancelText: "取消",
    onOk() {
    },
    onCancel(e) {
     /**
     * 点击遮罩层或右上角叉或取消按钮的回调-- type的值描述
     * 1. notBtn非按钮关闭，如点击了右上角图标，点击了蒙层
     * 2. cancel: 点击了取消按钮
     * 3. ok: 点击了确定按钮
     */
      console.log(e)
    }
  })
}
</script>

```typescript
<script setup lang="ts">
import { ref } from "vue";
import { prompt } from "fish-bubble-design";
const onPrompt = () => {
  const { close } = prompt({
    title: "温馨提示",
    width: "600px",
    content: `Are you sure delete this task?`,
    okText: "确定",
    cancelText: "取消",
    onOk() {
    },
    onCancel(e) {
      console.log(e)
    }
  })
</script>

<template>
  <fb-button plain @click="onPrompt">Open Prompt</fb-button>
</template>
```

## 全局方法

已经在app.config.globalProperties 添加了全局方法 $prompt。 在 vue 实例中你可以使用当前页面中的调用方式调用 Prompt

## API

### Prompt props

| 属性名     | 说明                     | 类型                  | 默认值 |
| ---------- | ------------------------ | --------------------- | ------ |
| width      | 对话框的宽度             | ^[string] / ^[number] | 440px  |
| showClose  | 是否显示关闭按钮         | ^[boolean]            | true   |
| title      | 标题                     | ^[string]             | —      |
| showIcon   | 是否显示 标题的 icon图标 | ^[boolean]            | true   |
| okText     | 确认按钮的文字           | ^[string]             | 确认   |
| cancelText | 取消按钮的文字           | ^[string]             | 取消   |
| content    | 内容                     | ^[string]             | —      |

### Prompt Events

| 属性名   | 说明           | 类型                      |
| -------- | -------------- | ------------------------- |
| onOk     | 确认按钮事件   | ^[Function] `() => void`  |
| onCancel | 点击了取消按钮 | ^[Function] `(e) => void` |
