<!--
 * @Date: 2023-11-18 10:42:44
 * @Description: 全局按钮
-->
<script lang="ts" setup>
import { computed, CSSProperties, ref } from "vue";
import FbIcon from "@fish-bubble-design/components/icon";
import { useNamespace } from "@fish-bubble-design/hooks";
import BaseWave from "../../_internal/wave/index.vue";

export interface IButtonProps {
  /** 按钮节点元素 */
  tag?: string;
  /** 按钮类型 */
  type?: "primary" | "success" | "warning" | "danger" | "default";
  /** 幽灵属性，使按钮背景透明 */
  ghost?: boolean;
  /** 确定它是否为普通按钮 */
  plain?: boolean;
  /** 按钮大小, 你还可以外面自己传递class自己修改按钮样式：如宽度 :class="$style.contactBtn" */
  size?: "large" | "middle" | "small";
  /** 按钮的宽度， 因为有的地方按钮宽度不统一，其它都是一样的效果。所以添加一个width */
  width?: string | number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中, 不建议在非type为primary情况下使用，因为背景颜色冲突看不出效果； 你还可以插槽自定义 loading图标 */
  loading?: boolean;
  /** 是否需要波浪效果 */
  wave?: boolean;
}

defineOptions({
  name: "FbButton"
});

const props = withDefaults(defineProps<IButtonProps>(), {
  tag: "button",
  type: "default",
  size: "middle",
  wave: true
});
// 事件
const emit = defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent
});

const ns = useNamespace("button");

const waveElRef = ref<any>(null);

const _props = computed(() => {
  return {
    disabled: props.disabled || props.loading
  };
});

const buttonStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {};
  if (props.width) {
    style[`width`] = typeof props.width == "string" ? props.width : `${props.width}px`;
  }
  return style;
});

const handleClick = (e: MouseEvent): void => {
  if (!props.disabled && !props.loading) {
    emit("click", e);
    waveElRef.value?.play();
  }
};
</script>

<template>
  <component
    :is="tag"
    v-bind="_props"
    :style="buttonStyle"
    @click="handleClick"
    :class="[ns.b(), ns.m(type), ns.m(size), ns.is('disabled', disabled), ns.is('loading', loading), ns.is('plain', plain), ns.is('ghost', ghost)]"
  >
    <template v-if="loading">
      <!-- 你可以自定义加载图标 -->
      <slot v-if="$slots?.loading" name="loading" />
      <!-- 默认加载图标 -->
      <fb-icon v-else icon="yp-jiazai" class="icon-loading" />
    </template>
    <!-- 自定义按钮左侧图标 -->
    <template v-else-if="$slots?.icon">
      <slot name="icon" />
    </template>
    <!-- 默认按钮内容部分 -->
    <span v-if="$slots?.default" class="btn-text"><slot /></span>
    <!-- 波浪 -->
    <BaseWave ref="waveElRef" v-if="wave" />
  </component>
</template>
