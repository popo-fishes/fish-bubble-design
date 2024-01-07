/*
 * @Date: 2023-12-15 20:15:15
 * @Description: Modify here please
 */
import { ref, computed, useSlots } from "vue";
import { isClient } from "@fish-bubble-design/core/shared/utils";
import type { ISelectProps, ISelectEmits } from "./type";

export const useSelect = (props: ISelectProps, emit: ISelectEmits) => {
  const slots = useSlots();
  // 是否获取焦点
  const inputHovering = ref(false);

  // select节点dom
  const selectWrapperRef = ref<InstanceType<any> | null>(null);

  const optionList = ref<ISelectProps["options"]>([]);

  // 是否存在自定义触发对象
  const isCustomTrigger = computed(() => {
    return !!slots.trigger;
  });

  // select的值
  const inputValue = computed(() => {
    const value = props.modelValue;
    if (!isClient) return props.placeholder;

    const val = (optionList.value || []).filter((c) => c.value == value)?.[0]?.label;
    return val || props.placeholder;
  });

  // 是否可以清空选项
  const showClose = computed(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : inputValue;
    // 开启清除，获取焦点， 并且存在值
    const criteria = props.clearable && inputHovering.value && hasValue;
    return criteria;
  });

  // select元素获取焦点
  const onMouseenter = () => {
    inputHovering.value = true;
  };

  // select元素失去焦点
  const onMouseleave = () => {
    inputHovering.value = false;
  };

  const handleOptionSelect = (option) => {
    emit("update:modelValue", option.value);
    emit("change", option.value);
    selectWrapperRef.value.onClose?.();
  };

  const handleClearClick = () => {
    emit("update:modelValue", "");
    emit("change", "");
  };

  return {
    selectWrapperRef,
    optionList,
    showClose,
    inputValue,
    isCustomTrigger,
    onMouseenter,
    onMouseleave,
    handleOptionSelect,
    handleClearClick
  };
};
