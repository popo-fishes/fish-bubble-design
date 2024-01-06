<!--
 * @Date: 2023-08-08 09:08:11
 * @Description: 字体组件
-->

<script lang="ts" setup>
import type { IconProps } from "./type";

defineOptions({
  name: "FbIcon"
});

defineProps<IconProps>();
</script>

<template>
  <i
    :class="['yp-pc', icon, 'yp-base-icon', isPointer ? 'yp-icon--pointer' : '']"
    :style="[size ? `font-size:${size}px` : '', color ? `color:${color}` : '']"
  />
</template>
