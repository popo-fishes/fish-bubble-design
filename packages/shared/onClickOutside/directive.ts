/*
 * @Date: 2024-02-05 10:58:06
 * @Description: Modify here please
 */
import type { ObjectDirective } from "vue";
import { onClickOutside } from ".";

export const vOnClickOutside: ObjectDirective<HTMLElement> = {
  mounted(el, binding) {
    // 对内部事件侦听器使用捕获 (用来判断是捕获还是冒泡)
    const capture = !binding.modifiers.bubble;
    if (typeof binding.value === "function") {
      (el as any).__onClickOutside_stop = onClickOutside(el, binding.value, { capture });
    } else {
      // eslint-disable-next-line no-console
      console.log("Must be a method");
    }
  },
  unmounted(el) {
    (el as any).__onClickOutside_stop();
  }
};
