<!--
 * @Date: 2023-08-08 09:08:11
 * @Description: 字体组件
-->

<script lang="ts" setup>
interface Props {
  icon: string;
  // 默认不传递size，size为继承。如果传递了size使用传递的
  size?: number | string;
  // 默认不传递color，color为继承。如果传递了color使用传递的
  color?: string;
  // 可点击--手指
  isPointer?: boolean;
}

defineOptions({
  name: "FIcon"
});

defineProps<Props>();
</script>

<template>
  <i
    :class="['yp-pc', icon, 'yp-base-icon', isPointer ? 'yp-icon--pointer' : '']"
    :style="[size ? `font-size:${size}px` : '', color ? `color:${color}` : '']"
  />
</template>
