<!--
 * @Date: 2024-01-17 19:43:01
 * @Description: 主要为了监听路由
-->
<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

function updateAsideTitle() {
  setTimeout(() => {
    const AsideOutlineTitle = document.querySelector(".content .outline-title");
    if (AsideOutlineTitle) {
      AsideOutlineTitle.textContent = "页面导航";
    }
  }, 200);
}

onMounted(() => {
  updateAsideTitle();
});

watch(
  () => route.path,
  () => {
    updateAsideTitle();
  }
);
</script>

<template>
  <div></div>
</template>
