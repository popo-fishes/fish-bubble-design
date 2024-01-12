<!--
 * @Date: 2023-11-22 11:52:49
 * @Description: select组件
 * -----todo 远程搜索
-->
<script lang="ts" setup>
import { computed, ref, provide, reactive, unref } from "vue";
import { useNamespace } from "@fish-bubble-design/hooks/use-namespace";
import FbPopper from "@fish-bubble-design/components/popper";
import FbIcon from "@fish-bubble-design/components/icon";
import FbInput from "@fish-bubble-design/components/input";
import OptionConstructor from "./option.vue";
import OptionsConstructor from "./options";
import { selectKey, SelectContext } from "./utils";
import { useSelect } from "./useSelect";
import type { ISelectProps, ISelectEmits } from "./type";

const props = withDefaults(defineProps<ISelectProps>(), {
  placeholder: "请选择",
  placement: "bottom",
  trigger: "hover",
  clearable: false,
  isTrigger: false
});

defineOptions({
  name: "FbSelect",
  inheritAttrs: false
});

const ns = useNamespace("select");

const emit = defineEmits<ISelectEmits>();

// select dom信息
const selectDomWidth = ref<number>(0);

const { selectWrapperRef, reference, showClose, inputValue, isCustomTrigger, optionList, onMouseenter, onMouseleave, handleOptionSelect, handleClearClick } =
  useSelect(props, emit);

// 下拉菜单的样式
const selectDownStyle = computed(() => {
  const _width = selectDomWidth.value;
  // 下拉菜单和选择器同宽。默认将设置width
  return {
    width: `${_width}px`,
    ...props.dropdownStyle
  };
});

// 挂载的触发器
const getPopupContainer = (triggerNode) => {
  const { width } = triggerNode!.getBoundingClientRect();
  selectDomWidth.value = width;
  if (props.isTrigger) {
    return triggerNode;
  }
};

// Options渲染完毕
const onOptionsRendered = (v) => {
  optionList.value = v;
};

const transition = computed(() => {
  return `${unref(ns.namespace)}-fade-in-scale-up`;
});

provide(
  selectKey,
  reactive({
    props,
    handleOptionSelect
  }) as SelectContext
);
</script>

<template>
  <fb-popper
    ref="selectWrapperRef"
    :transition="transition"
    :placement="placement"
    :trigger="trigger"
    :get-popup-container="getPopupContainer"
    :popper-class="ns.b('dropdown')"
    :popper-style="selectDownStyle"
  >
    <template #default>
      <div :class="[!isCustomTrigger ? ns.b() : ns.m('custom'), ns.m(size)]" @mouseenter="onMouseenter" @mouseleave="onMouseleave" v-bind="$attrs">
        <!-- 我们为外面暴露了自定义触发对象，不需要使用默认的触发节点，可以自定义插槽, isCustomTrigger属性可以控制样式 -->
        <slot name="trigger">
          <!-- 默认触发器 -->
          <fb-input ref="reference" :size="size" readonly v-model="inputValue">
            <template #suffix>
              <!-- 不展示关闭按钮才显示箭头 -->
              <fb-icon icon="yp-sanjiao-xia" :class="ns.e('arrow')" v-if="!showClose" />
              <fb-icon icon="yp-danchuangguanbi" :class="ns.e('clear')" @click.stop="() => handleClearClick()" v-if="showClose" />
            </template>
          </fb-input>
        </slot>
      </div>
    </template>
    <template #popup>
      <div class="dropdown__wrap">
        <ul class="dropdown__list">
          <OptionsConstructor @update-options="onOptionsRendered">
            <slot>
              <OptionConstructor v-bind="item" v-for="(item, i) in options || []" :key="i" />
            </slot>
          </OptionsConstructor>
        </ul>
      </div>
    </template>
  </fb-popper>
</template>
