<!--
 * @Date: 2023-11-22 11:52:49
 * @Description: select组件
-->
<script lang="ts" setup>
import { computed, ref, provide, reactive, unref } from "vue";
import { useNamespace } from "@fish-bubble-design/hooks/use-namespace";
import { vOnClickOutside } from "@fish-bubble-design/shared";
import FbPopper from "@fish-bubble-design/components/popper";
import { ArrowUp, CircleCloseFilled } from "@fish-bubble/icons";
import BaseWave from "../../_internal/wave/src/wave.vue";
import OptionConstructor from "./option.vue";
import OptionsConstructor from "./options";
import { selectKey, SelectContext } from "./utils";
import { useSelect } from "./useSelect";
import type { ISelectProps, ISelectEmits } from "./type";

const props = withDefaults(defineProps<ISelectProps>(), {
  placement: "bottom",
  trigger: "click",
  clearable: false,
  isTrigger: false,
  wave: true,
  filterable: true,
  suffixIcon: ArrowUp,
  clearIcon: CircleCloseFilled
});

defineOptions({
  name: "FbSelect",
  inheritAttrs: false
});

const ns = useNamespace("select");

const emit = defineEmits<ISelectEmits>();

// select dom信息
const selectDomWidth = ref<number>(0);

const {
  wrapperRef,
  calculatorRef,
  inputRef,
  showClose,
  states,
  isCustomTrigger,
  hasModelValue,
  onMouseenter,
  shouldShowPlaceholder,
  onMouseleave,
  handleOptionSelect,
  handleClearClick,
  onOptionCreate,
  onOptionDestroy,
  dropdownMenuVisible,
  expanded,
  currentPlaceholder,
  selectDisabled,
  inputStyle,
  handleBlur,
  handleFocus,
  handleCompositionStart,
  handleCompositionEnd,
  onInput,
  isFocused,
  toggleMenu
} = useSelect(props, emit);

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

const transition = computed(() => {
  return props.transition || `${unref(ns.namespace)}-fade-in-scale-up`;
});

const handleClickOutside = (event: Event) => {
  expanded.value = false;
};

provide(
  selectKey,
  reactive({
    props,
    states,
    handleOptionSelect,
    onOptionCreate,
    onOptionDestroy
  }) as SelectContext
);
</script>

<template>
  <fb-popper
    :transition="transition"
    :placement="placement"
    :trigger="trigger"
    :offset="5"
    :hide-after-time="0"
    :visible="dropdownMenuVisible"
    :get-popup-container="getPopupContainer"
    :popper-class="ns.b('dropdown')"
    :popper-style="selectDownStyle"
  >
    <template #default>
      <div
        :class="[
          !isCustomTrigger ? ns.b() : ns.m('custom'),
          ns.m(size),
          ns.is('focused', isFocused),
          ns.is('filterable', filterable),
          ns.is('disabled', selectDisabled)
        ]"
        ref="wrapperRef"
        v-on-click-outside="handleClickOutside"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
        @click.stop="toggleMenu"
        v-bind="$attrs"
      >
        <!-- 我们为外面暴露了自定义触发对象，不需要使用默认的触发节点，可以自定义插槽, isCustomTrigger属性可以控制样式 -->
        <slot name="trigger" v-if="isCustomTrigger" />
        <div :class="ns.e('selection')" v-else>
          <div v-if="!selectDisabled" :class="[ns.e('input-wrapper'), ns.is('hidden', !filterable)]">
            <input
              ref="inputRef"
              v-model="states.inputValue"
              type="text"
              :class="ns.e('input')"
              :disabled="selectDisabled"
              :style="inputStyle"
              :readonly="!filterable"
              spellcheck="false"
              @focus="handleFocus"
              @blur="handleBlur"
              @compositionstart="handleCompositionStart"
              @compositionend="handleCompositionEnd"
              @input="onInput"
            />
            <span v-if="filterable" ref="calculatorRef" aria-hidden="true" :class="ns.e('input-val')" v-text="states.inputValue" />
          </div>
          <div v-if="shouldShowPlaceholder" :class="[ns.e('placeholder'), ns.is('transparent', !hasModelValue || (expanded && !states.inputValue))]">
            <span>{{ currentPlaceholder }}</span>
          </div>
        </div>
        <div :class="ns.e('suffix')">
          <!-- 不展示关闭按钮才显示箭头 -->
          <component :is="suffixIcon" :class="ns.e('arrow')" v-if="suffixIcon && !showClose" />
          <component :is="clearIcon" :class="ns.e('closeIcon')" @click.stop="() => handleClearClick()" v-if="clearIcon && showClose" />
        </div>
        <!-- 波浪 -->
        <BaseWave v-if="wave" />
      </div>
    </template>
    <template #popup>
      <div class="dropdown__wrap">
        <ul class="dropdown__list">
          <OptionsConstructor>
            <slot>
              <OptionConstructor v-bind="item" v-for="(item, i) in options || []" :key="i" />
            </slot>
          </OptionsConstructor>
        </ul>
      </div>
    </template>
  </fb-popper>
</template>
