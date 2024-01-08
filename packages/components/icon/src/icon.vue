<!--
 * @Date: 2023-08-08 09:08:11
 * @Description: 字体组件
-->

<script lang="ts" setup>
import { useNamespace } from "@fish-bubble-design/hooks";
import type { IconProps } from "./type";

defineOptions({
  name: "FbIcon"
});

defineProps<IconProps>();

const ns = useNamespace("icon");
</script>

<template>
  <i :class="[ns.b(), isPointer ? 'yp-icon--pointer' : '', 'yp-pc', icon]" :style="[size ? `font-size:${size}px` : '', color ? `color:${color}` : '']" />
</template>
