/*
 * @Date: 2023-12-15 20:18:59
 * @Description: Modify here please
 */
import type { Component } from "vue";
import type { IPopperProps } from "@fish-bubble-design/components/popper";
import type { ComponentSize } from "@fish-bubble-design/core";

export type IOption = {
  value: string | number;
  label: string | number;
  disabled?: boolean;
};

export interface ISelectProps {
  /** 选择项数据 */
  options?: IOption[];
  /** 选择器大小 */
  size?: ComponentSize;
  /** value值 */
  modelValue?: any;
  /** 占位符 */
  placeholder?: string;
  /** 是否可以清空选项 */
  clearable?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否多选  todo */
  multiple?: boolean;
  /** 下拉菜单的 style 属性 */
  dropdownStyle?: object;
  /** 下拉菜单的动画name 遵循https://cn.vuejs.org/guide/built-ins/transition.html#transition */
  transition?: string;
  /** 弹出位置? 你可以控制下拉菜单在触发对象节点上的某个位置弹出 */
  placement?: IPopperProps["placement"];
  /** 触发方式 */
  trigger?: IPopperProps["trigger"];
  /** 是否把菜单放到触发器节点下面，默认放到body */
  isTrigger?: boolean;
  /** 自定义后缀图标组件 */
  suffixIcon?: string | Component;
  /** 自定义清除图标组件 */
  clearIcon?: string | Component;
  /** 是否需要波浪效果，如何触发器是一个输入框时，这个属性是有用的 */
  wave?: boolean;
}

export type ISelectEmits = {
  (e: "update:modelValue", value: number | string): void;
  (e: "change", value: number | string): void;
};
