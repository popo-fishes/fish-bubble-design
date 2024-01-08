<!--
 * @Date: 2023-12-18 21:20:32
 * @Description: content pop-up
-->
<template>
  <!--
   * disabled: When the value is' true ', the content will remain in its original position instead of
   * being moved to the target container. Can be dynamically changed.
   -->
  <teleport :disabled="isTeleport" :to="container">
    <transition :name="transitionClass" :duration="500" @after-enter="onAfterShow" @after-leave="onAfterLeave">
      <div
        ref="contentRef"
        :role="role"
        v-bind="$attrs"
        v-show="shouldShow"
        :style="contentStyle"
        :class="contentClass"
        tabindex="-1"
        @mouseenter="(e) => $emit('mouseenter', e)"
        @mouseleave="(e) => $emit('mouseleave', e)"
      >
        <template v-if="!isDestroyed">
          <slot />
        </template>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount, unref, watch, onMounted, shallowRef, onBeforeMount } from "vue";
import { isClient } from "@fish-bubble-design/shared/utils";
import { IPopperContentProps, popperContentEmits } from "./content";
import { usePopperContent } from "./composables/use-content";
import { getParent } from "./utils";

defineOptions({
  name: "PopperContent",
  inheritAttrs: false
});

const emit = defineEmits(popperContentEmits);

const props = defineProps<IPopperContentProps>();

const { contentRef, triggerRef, contentStyle, contentClass, updateAlign, role, ns } = usePopperContent(props);

// Has it been destroyed
const isDestroyed = ref(false);

// During SSR - insertion is not allowed by default, move to the target container
const isTeleport = ref(true);

let timer: ReturnType<typeof setTimeout> | undefined;

// container
const container = shallowRef<HTMLElement | null>(null);

const transitionClass = computed(() => {
  return props.transition || `${ns.b()}-scale-up-transition`;
});

const shouldShow = computed(() => {
  return props.disabled ? false : unref(props.open);
});

// Mount container
const createMountContainer = () => {
  if (!isClient) {
    return null;
  }
  if (container.value && !container.value.parentNode) {
    let parent: HTMLElement | null = null;
    parent = getParent(props.getPopupContainer, triggerRef.value);
    if (parent) {
      parent.appendChild(container.value);
    }
  }
};

onBeforeMount(() => {
  if (!isClient) {
    return null;
  }
  if (!container.value) {
    container.value = document.createElement("div");
    // 改变为可以传送了，不过此时只是传送到了默认容器上；还没在文档上
    isTeleport.value = false;
  }
});

onMounted(() => {
  createMountContainer();
  // Perform a calculation of position once
  updateAlign();
});

onBeforeUnmount(() => {
  isDestroyed.value = true;
});

// 元素已从 DOM 中移除时
const onAfterLeave = (e) => {
  emit("hide", e);
};

// 当进入过渡完成时调用
const onAfterShow = (e) => {
  emit("show", e);
};

watch(shouldShow, () => {
  clearTimeout(timer);
  // Delay and wait until the content node is displayed before we proceed with the alignment
  timer = setTimeout(() => {
    updateAlign();
  });
});

defineExpose({
  /**
   * @description popper content element
   */
  contentRef,
  /**
   * @description method for updating align
   */
  updateAlign
});
</script>
