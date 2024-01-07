<!--
 * @Date: 2023-12-23 17:51:35
 * @Description: Modify here please
-->
<script setup lang="ts">
import { ref, computed, shallowRef, watch, nextTick } from "vue";
import { useNamespace } from "@fish-bubble-design/hooks";
import { isNil } from "@fish-bubble-design/core/shared/utils";
import { useFocusController } from "./useFocusController";
import BaseWave from "../../_internal/wave/index.vue";
import FbIcon from "@fish-bubble-design/components/icon";

import type { InputProps, InputEmits } from "./type";
type TargetElement = HTMLInputElement | HTMLTextAreaElement;

const emit = defineEmits<InputEmits>();

defineOptions({ name: "FbInput" });

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: "请输入",
  type: "text",
  size: "middle"
});

const nsInput = useNamespace("input");
const nsTextarea = useNamespace("textarea");

const inputRef = shallowRef<HTMLInputElement>();
const textareaRef = shallowRef<HTMLInputElement>();

const _ref = computed(() => inputRef.value || textareaRef.value);

const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref);

const isComposing = ref(false);

const nativeInputValue = computed(() => (isNil(props.modelValue) ? "" : String(props.modelValue)));

const wrapperKls = computed(() => {
  if (props.type !== "textarea") {
    return [nsInput.b(), nsInput.m(props.size), nsInput.is("focus", isFocused.value), nsInput.is("disabled", inputDisabled.value)];
  }
  return [nsTextarea.b(), nsInput.is("focus", isFocused.value)];
});

const inputDisabled = computed(() => props.disabled);

const showClear = computed(() => props.clearable && !props.disabled && !!nativeInputValue.value && isFocused.value);

const handleInput = async (event: Event) => {
  let { value } = event.target as TargetElement;

  if (props.formatter) {
    value = props.parser ? props.parser(value) : value;
  }

  // 在合成过程中不应发出输入
  if (isComposing.value) return;

  if (value === nativeInputValue.value) {
    setNativeInputValue();
    return;
  }

  emit("update:modelValue", value);
  emit("input", value);

  // 确保本地输入值得到控制
  await nextTick();
  setNativeInputValue();
};

// 设置值
const setNativeInputValue = () => {
  // 输入口的节点
  const input = _ref.value;
  const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
  if (!input || input.value === formatterValue) return;
  // 给节点赋值
  input.value = formatterValue;
};

const handleCompositionEnd = (event: CompositionEvent) => {
  if (isComposing.value) {
    isComposing.value = false;
    handleInput(event);
  }
};

const clear = () => {
  emit("update:modelValue", "");
  emit("input", "");
};

const handleChange = (event: Event) => {
  emit("change", (event.target as TargetElement).value);
};

watch(nativeInputValue, () => setNativeInputValue());

const focus = async () => {
  await nextTick();
  _ref.value?.focus();
};

const blur = () => _ref.value?.blur();

defineExpose({
  /** @description HTML input element */
  inputRef,
  /** @description HTML textarea element */
  textareaRef,
  /** @description HTML element, input or textarea */
  ref: _ref,
  /** @description HTML input element native method */
  focus,
  /** @description HTML input element native method */
  blur,
  /** @description clear input value */
  clear
});
</script>

<template>
  <div :class="wrapperKls" ref="wrapperRef" v-if="type !== 'textarea'">
    <input
      ref="inputRef"
      :class="[nsInput.e('inner')]"
      :style="inputStyle"
      :disabled="inputDisabled"
      :maxlength="maxlength"
      :readonly="readonly"
      :placeholder="placeholder"
      :type="type"
      @compositionstart="() => (isComposing = true)"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <slot name="suffix">
      <!-- 关闭按钮 -->
      <fb-icon icon="yp-danchuangguanbi" v-if="showClear" class="closeIcon" @click="clear" />
    </slot>
    <!-- 波浪 -->
    <BaseWave />
  </div>
  <div :class="wrapperKls" ref="wrapperRef" v-if="type == 'textarea'">
    <textarea
      ref="textareaRef"
      :class="nsTextarea.e('inner')"
      :style="inputStyle"
      :disabled="inputDisabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @compositionstart="() => (isComposing = true)"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <!-- 波浪 -->
    <BaseWave />
  </div>
</template>
