<!--
 * @Date: 2024-01-18 20:41:20
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref, computed } from "vue";
const options = [
  { label: "Everybody's Got Something to Hide Except Me and My Monkey", value: "1", disabled: true },
  { label: "Drive My Car", value: "2" },
  { label: "Norwegian Wood", value: "3" },
  { label: "You Won't See", value: "4", disabled: true },
  { label: "Nowhere Man", value: "5" },
  { label: "Think For Yourself", value: "6" },
  { label: "Everybody's Got Something to Hide Except Me and My Monkey", value: "11", disabled: true },
  { label: "Drive My Car", value: "12" },
  { label: "Norwegian Wood", value: "13" },
  { label: "You Won't See", value: "14", disabled: true },
  { label: "Nowhere Man", value: "15" },
  { label: "Think For Yourself", value: "16" },
  { label: "Everybody's Got Something to Hide Except Me and My Monkey", value: "21", disabled: true },
  { label: "Drive My Car", value: "22" },
  { label: "Norwegian Wood", value: "23" },
  { label: "You Won't See", value: "24", disabled: true },
  { label: "Nowhere Man", value: "52" },
  { label: "Think For Yourself", value: "62" }
];
const value = ref(null);
</script>

<template>
  <div class="mb-4">
    <fb-select v-model="value" :options="options" />
  </div>
</template>
