<!--
 * @Date: 2023-12-25 15:01:25
 * @Description: Modify here please
-->
<template>
  <label :class="compKls">
    <span :class="spanKls">
      <span :class="ns.e('inner')" />
      <input
        type="checkbox"
        @change="handleChange"
        :disabled="isDisabled"
        :class="ns.e('original')"
        :indeterminate="indeterminate"
        v-model="model"
        :name="name"
        :value="label"
      />
    </span>
    <span v-if="hasOwnLabel" :class="ns.e('label')">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { useSlots, computed, inject, toRaw } from "vue";
import type { ICheckboxProps } from "./type";
import { isNil, isUndefined, isArray, isBoolean } from "@fish-bubble-design/core/shared/utils";
import { useNamespace } from "@fish-bubble-design/hooks";
import { checkboxGroupContextKey } from "./constants";
import type { CheckboxEmits } from "./type";

defineOptions({ name: "FbCheckbox" });

const props = withDefaults(defineProps<ICheckboxProps>(), {
  label: "",
  value: {
    type: Boolean,
    default: false
  }
});

const slots = useSlots();

const emit = defineEmits<CheckboxEmits>();

const ns = useNamespace("checkbox");

const hasOwnLabel = computed<boolean>(() => {
  return !!slots.default || !isNil(props.label);
});

const isChecked = computed<boolean>(() => {
  const value = model.value;
  if (isBoolean(value)) {
    return value;
  } else if (isArray(value)) {
    return value.map(toRaw).includes(props.label);
  } else {
    return !!value;
  }
});

const isDisabled = computed(() => {
  return props.disabled;
});

const checkboxGroup = inject(checkboxGroupContextKey, undefined);

const isGroup = computed(() => isUndefined(checkboxGroup) === false);

const model = computed({
  get() {
    return isGroup.value ? checkboxGroup?.modelValue?.value : props.modelValue;
  },

  set(val: unknown) {
    if (isGroup.value && isArray(val)) {
      checkboxGroup?.changeEvent?.(val);
    } else {
      emit("update:modelValue", val);
    }
  }
});

const compKls = computed(() => {
  return [ns.b(), ns.is("disabled", isDisabled.value), ns.is("checked", isChecked.value)];
});

const spanKls = computed(() => {
  return [ns.e("input"), ns.is("disabled", isDisabled.value), ns.is("checked", isChecked.value), ns.is("indeterminate", props.indeterminate)];
});

const handleChange = (e) => {
  const target = e.target as HTMLInputElement;
  emit("change", target.checked);
};
</script>
