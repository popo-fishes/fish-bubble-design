<!--
 * @Date: 2024-01-17 19:43:01
 * @Description: 主要为了监听路由
-->
<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

function updateRoute() {
  console.log(route.path);
}

onMounted(() => {
  updateRoute();
});

watch(
  () => route.path,
  () => {
    updateRoute();
  }
);
</script>

<template>
  <div></div>
</template>
