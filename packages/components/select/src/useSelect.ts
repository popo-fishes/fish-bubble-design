/*
 * @Date: 2023-12-15 20:15:15
 * @Description: Modify here please
 */
import { ref, computed, useSlots, reactive } from "vue";
import { useResizeObserver, isArray } from "@fish-bubble-design/shared";
import { useFocusController } from "@fish-bubble-design/hooks";
import { useInput } from "./useInput";
import type { ISelectProps, ISelectEmits } from "./type";

const MINIMUM_INPUT_WIDTH = 11;

export const useSelect = (props: ISelectProps, emit: ISelectEmits) => {
  const slots = useSlots();

  // 节点dom
  const calculatorRef = ref<HTMLElement>(null);
  const inputRef = ref<HTMLInputElement | null>(null);

  // 选项列表
  const optionList = ref<ISelectProps["options"]>([]);

  const states = reactive({
    // 输入框的值
    inputValue: "",
    // 选项的值
    options: new Map(),
    cachedOptions: new Map(),
    // 选项的值
    optionValues: [] as any[],
    // 选中项
    selected: props.multiple ? [] : ({} as any),
    // 选中项label
    selectedLabel: "",
    // 是否获取焦点
    inputHovering: false,
    // 输入框的内容宽度
    calculatorWidth: 0
  });

  // 控制展开菜单
  const expanded = ref(false);

  const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(inputRef);

  // 是否存在自定义触发对象
  const isCustomTrigger = computed(() => {
    return !!slots.trigger;
  });

  const selectDisabled = computed(() => props.disabled);

  // 存在值
  const hasModelValue = computed(() => {
    return props.multiple
      ? isArray(props.modelValue) && props.modelValue.length > 0
      : props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== "";
  });

  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || "Loading";
    } else {
      if (props.remote && !states.inputValue && optionList.value.length === 0) return false;
      if (props.filterable && states.inputValue && optionList.value.length > 0 && filteredOptionsCount.value === 0) {
        return props.noMatchText || "No matching data";
      }
      if (states.options.size === 0) {
        return props.noDataText || "No data";
      }
    }
    return null;
  });

  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && emptyText.value !== false;
    },
    set(val: boolean) {
      expanded.value = val;
    }
  });

  // 创建Option
  const onOptionCreate = (vm: any) => {
    states.options.set(vm.value, vm);
  };

  const onOptionDestroy = (key, vm: any) => {
    if (states.options.get(key) === vm) {
      states.options.delete(key);
    }
  };

  // select的值
  const inputValue = computed(() => {
    const value = props.modelValue;

    const val = (optionList.value || []).filter((c) => c.value == value)?.[0]?.label;
    return val || "";
  });

  // 是否可以清空选项
  const showClose = computed(() => {
    const hasValue = props.multiple ? isArray(props.modelValue) && props.modelValue.length > 0 : inputValue.value;
    // 开启清除，获取焦点， 并且存在值
    const criteria = props.clearable && states.inputHovering && hasValue;
    return criteria;
  });

  // 是否显示Placeholder
  const shouldShowPlaceholder = computed(() => {
    if (isArray(props.modelValue)) {
      return props.modelValue.length === 0 && !states.inputValue;
    }
    return props.filterable ? !states.inputValue : true;
  });

  const currentPlaceholder = computed(() => {
    const _placeholder = props.placeholder ?? "请选择";
    return props.multiple || !hasModelValue.value ? _placeholder : states.selectedLabel;
  });

  // select元素获取焦点
  const onMouseenter = () => {
    states.inputHovering = true;
  };

  // select元素失去焦点
  const onMouseleave = () => {
    states.inputHovering = false;
  };

  const handleOptionSelect = (option) => {
    emit("update:modelValue", option.value);
    emit("change", option.value);
    // 获取焦点
    setSoftFocus();
  };

  const handleClearClick = () => {
    emit("update:modelValue", "");
    emit("change", "");
  };

  const resetCalculatorWidth = () => {
    states.calculatorWidth = calculatorRef.value.getBoundingClientRect().width;
  };

  const inputStyle = computed(() => ({
    width: `${Math.max(states.calculatorWidth, MINIMUM_INPUT_WIDTH)}px`
  }));

  const toggleMenu = () => {
    if (selectDisabled.value) return;

    expanded.value = !expanded.value;
  };

  // 输入口搜索事件
  const onInput = (event) => {
    states.inputValue = event.target.value;
    // if (props.remote) {
    //   debouncedOnInputChange();
    // } else {
    //   return onInputChange();
    // }
  };

  const { handleCompositionStart, handleCompositionEnd } = useInput((e) => onInput(e));

  useResizeObserver(calculatorRef, resetCalculatorWidth);

  return {
    states,
    wrapperRef,
    calculatorRef,
    inputRef,
    optionList,
    showClose,
    inputValue,
    isCustomTrigger,
    shouldShowPlaceholder,
    onMouseenter,
    onMouseleave,
    handleOptionSelect,
    handleClearClick,
    onOptionDestroy,
    onOptionCreate,
    dropdownMenuVisible,
    expanded,
    hasModelValue,
    currentPlaceholder,
    selectDisabled,
    inputStyle,
    handleFocus,
    handleBlur,
    handleCompositionStart,
    handleCompositionEnd,
    onInput,
    isFocused,
    toggleMenu
  };
};
