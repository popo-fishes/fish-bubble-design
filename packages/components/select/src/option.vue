<!--
 * @Date: 2023-12-16 22:15:33
 * @Description: Modify here please
-->
<template>
  <li role="option" :class="containerKls" @click.stop="selectOptionClick">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script lang="ts" setup>
import { computed, unref, inject, getCurrentInstance } from "vue";
import { selectKey } from "./utils";

interface IOptionProps {
  value: string | number;
  label: string | number;
  disabled?: boolean;
}

defineOptions({
  name: "FbOption"
});

const props = defineProps<IOptionProps>();

const select = inject(selectKey);
const containerKls = computed(() => [
  "dropdown__item",
  {
    disabled: unref(props.disabled),
    selected: unref(itemSelected)
  }
]);

const vm = getCurrentInstance().proxy;

const itemSelected = computed(() => {
  return select.props.modelValue == props.value;
});

const currentLabel = computed(() => {
  return props.label || props.value;
});

const selectOptionClick = () => {
  if (props.disabled !== true) {
    select.handleOptionSelect(vm);
  }
};
</script>
