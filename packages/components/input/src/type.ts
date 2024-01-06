/*
 * @Date: 2023-12-25 09:54:16
 * @Description: Modify here please
 */
import type { CSSProperties } from "vue";

export interface InputProps {
  modelValue?: string | number | null | undefined;
  size?: "large" | "middle" | "small";
  /** 类型原生 input 类型 */
  type?: string;
  /** 占位符 */
  placeholder?: string;
  /** 最大输入长度 */
  maxlength?: string | number;
  /** 指定输入值的格式 (仅当 type 是"text"时才起作用)   */
  formatter?: (v: any) => any;
  /** 指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)  */
  parser?: (v: any) => any;
  /** 是否显示清除按钮 */
  clearable?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** input 元素或 textarea 元素的 style */
  inputStyle?: CSSProperties;
}

export type InputEmits = {
  (e: "update:modelValue", value: number | string): void;
  (e: "input", value: number | string): void;
  (e: "change", value: number | string): void;
  (e: "focus", event: any): void;
  (e: "blur", event: any): void;
};
