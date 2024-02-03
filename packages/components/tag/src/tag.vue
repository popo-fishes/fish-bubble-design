<!--
 * @Date: 2024-02-02 17:38:33
 * @Description: Modify here please
-->
<template>
  <span :class="containerKls" @click="handleClick">
    <span :class="ns.e('content')">
      <slot />
    </span>
    <Close v-if="closable" :class="ns.e('close')" @click.stop="handleClose" />
  </span>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Close } from "@fish-bubble/icons";
import { useNamespace } from "@fish-bubble-design/hooks";
import type { ComponentSize } from "@fish-bubble-design/core";

interface ITagProps {
  /** 按钮类型 */
  type?: "" | "success" | "warning" | "danger" | "info";
  /** 幽灵属性，使按钮背景透明 */
  effect?: "dark" | "light" | "plain";
  /** 大小 */
  size?: ComponentSize;
  /** Tag 是否为圆形 */
  round?: boolean;
  /** 是否可关闭 */
  closable?: boolean;
}

defineOptions({
  name: "FbTag"
});

const props = withDefaults(defineProps<ITagProps>(), {
  type: "",
  effect: "plain"
});

const emit = defineEmits({
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent
});

const ns = useNamespace("tag");

const containerKls = computed(() => {
  const { type, effect, closable, round, size } = props;
  return [ns.b(), ns.is("closable", closable), ns.m(type), ns.m(size), ns.m(effect), ns.is("round", round)];
});

// methods
const handleClose = (event: MouseEvent) => {
  emit("close", event);
};

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>
