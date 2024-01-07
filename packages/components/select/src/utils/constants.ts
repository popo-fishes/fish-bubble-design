/*
 * @Date: 2023-12-18 20:10:26
 * @Description: Modify here please
 */
import type { InjectionKey } from "vue";

export interface SelectContext {
  props: {
    modelValue?: string | number | unknown | unknown[];
    hideIcon?: boolean;
  };
  handleOptionSelect(vm: unknown): void;
}

export const selectKey: InjectionKey<SelectContext> = Symbol("FbSelect");
