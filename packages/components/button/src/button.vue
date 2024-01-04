<!--
 * @Date: 2023-11-18 10:42:44
 * @Description: 全局按钮
-->
<script lang="ts" setup>
import { computed, CSSProperties } from "vue";
import FbIcon from "@fish-bubble-design/components/icon";
import { useNamespace } from "@fish-bubble-design/hooks";

export interface IButtonProps {
  tag?: string;
  /**
   *  按钮类型
   */
  type?: "primary" | "default" | "plain" | "undertint";
  /**
   * 按钮大小, 你还可以外面自己传递class自己修改按钮样式：如宽度 :class="$style.contactBtn"
   */
  size?: "large" | "middle" | "small";
  /** 按钮的宽度， 因为有的地方按钮宽度不统一，其它都是一样的效果。所以添加一个width */
  width?: string | number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中, 不建议在非type为primary情况下使用，因为背景颜色冲突看不出效果； 你还可以插槽自定义 loading图标 */
  loading?: boolean;
}

defineOptions({
  name: "FbButton"
});

const props = withDefaults(defineProps<IButtonProps>(), {
  tag: "button",
  type: "default",
  size: "middle"
});
// 事件
defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent
});

const ns = useNamespace("button");

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
</script>

<template>
  <component
    :is="tag"
    v-bind="_props"
    :style="buttonStyle"
    @click="(e) => $emit('click', e)"
    :class="[ns.b(), ns.m(type), ns.m(size), ns.is('disabled', disabled), ns.is('loading', loading)]"
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
  </component>
</template>
