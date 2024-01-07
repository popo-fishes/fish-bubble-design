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

<script lang="ts">
import { computed, defineComponent, unref, inject, getCurrentInstance } from "vue";
import { selectKey } from "./utils";

export default defineComponent({
  name: "FbOption",
  componentName: "FbOption",
  props: {
    /** 选项的值 */
    value: {
      required: true,
      type: [String, Number]
    },
    /** 选项的label */
    label: {
      required: true,
      type: [String, Number]
    },
    /** 禁止 */
    disabled: Boolean
  },

  setup(props) {
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

    return {
      containerKls,
      currentLabel,
      selectOptionClick
    };
  }
});
</script>
