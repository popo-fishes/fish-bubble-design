/*
 * @Date: 2023-11-23 13:35:43
 * @Description: Modify here please
 */
import { computed, inject, unref, ref } from "vue";
import type { StyleValue, CSSProperties } from "vue";
import { alignElement } from "dom-align";
import { isNumber } from "@fish-bubble-design/core/shared/utils";
import { useNamespace, useZIndex } from "@fish-bubble-design/hooks";
import { POPPER_WRAP_INJECTION_KEY, getAlignFromPlacement, defaultAlign } from "../utils";
import type { IPopperContentProps } from "../content";

export const usePopperContent = (props: IPopperContentProps) => {
  const { contentRef, triggerRef, role } = inject(POPPER_WRAP_INJECTION_KEY, undefined)!;

  const { nextZIndex } = useZIndex();

  const ns = useNamespace("popper");

  const contentZIndex = ref<number>(isNumber(props.zIndex) ? props.zIndex : nextZIndex());

  // 对齐配置
  const align = computed(() => {
    const { popupPlacement, builtinPlacements } = props;
    if (popupPlacement && builtinPlacements) {
      return getAlignFromPlacement(builtinPlacements, popupPlacement);
    }
    return defaultAlign();
  });

  // 执行对齐
  const updateAlign = () => {
    if (!contentRef.value || !triggerRef.value) return;
    alignElement(contentRef.value, triggerRef.value, align.value);
  };

  // 内容样式
  const contentClass = computed(() => [ns.b(), props.popperClass]);

  const contentStyle = computed<StyleValue[]>(() => {
    return [{ zIndex: unref(contentZIndex) } as CSSProperties, , props.popperStyle || {}];
  });

  return {
    ns,
    contentRef,
    triggerRef,
    updateAlign,
    role,
    contentClass,
    contentStyle
  };
};
