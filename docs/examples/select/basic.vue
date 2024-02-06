<!--
 * @Date: 2024-01-18 20:41:20
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref, computed } from "vue";
const options = [
  { label: "a1a1a1a1a1", value: "1", disabled: true },
  { label: "b1b1b1b1", value: "2" },
  { label: "c2c2c2c2", value: "3" },
  { label: "d3d3d3d3", value: "4", disabled: true },
  { label: "e3e3e3e3e3", value: "5" },
  { label: "f3f3f3f3", value: "6" },
  { label: "g4g4g4g4", value: "11", disabled: true },
  { label: "h4h4h4h4", value: "12" }
];
const value = ref(null);
</script>

<template>
  <div class="mb-4">
    <fb-select v-model="value" :options="options" style="width: 300px" />
  </div>
</template>
