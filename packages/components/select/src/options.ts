/*
 * @Date: 2023-12-20 19:43:43
 * @Description: Modify here please
 */
import { defineComponent, inject } from "vue";
import type { Component, VNode, VNodeNormalizedChildren } from "vue";
import { selectKey } from "./utils";

export default defineComponent({
  name: "Options",
  emits: ["update-options"],
  setup(_, { slots, emit }) {
    const select = inject(selectKey);

    let cachedOptions: any[] = [];

    function isSameOptions(a: any[], b: any[]) {
      if (a.length !== b.length) return false;
      for (const [index] of a.entries()) {
        if (JSON.stringify(a[index]) != JSON.stringify(b[index])) {
          return false;
        }
      }
      return true;
    }

    return () => {
      const children = slots.default?.();
      const valueList: any[] = [];

      function filterOptions(children?: VNodeNormalizedChildren) {
        if (!Array.isArray(children)) return;
        (children as VNode[]).forEach((item) => {
          const name = ((item?.type || {}) as Component)?.name;
          if (name === "FbOption") {
            valueList.push(item.props?.value);
          } else if (Array.isArray(item.children)) {
            filterOptions(item.children);
          }
        });
      }

      if (children.length) {
        filterOptions(children![0]?.children);
      }

      if (!isSameOptions(valueList, cachedOptions)) {
        cachedOptions = valueList;
        if (select) {
          select.states.optionValues = valueList;
        }
      }

      return children;
    };
  }
});
