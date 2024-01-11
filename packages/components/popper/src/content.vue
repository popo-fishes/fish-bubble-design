<!--
 * @Date: 2023-12-18 21:20:32
 * @Description: content pop-up
-->
<template>
  <transition :name="transitionClass" v-if="isSSR" @after-enter="onAfterShow" @after-leave="onAfterLeave">
    <div
      ref="contentRef"
      :role="role"
      v-bind="contentAttrs"
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
  <teleport :to="container" v-else>
    <transition :name="transitionClass" @after-enter="onAfterShow" @after-leave="onAfterLeave">
      <div
        ref="contentRef"
        :role="role"
        v-bind="contentAttrs"
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
import { ref, computed, onBeforeUnmount, unref, onMounted, shallowRef, onBeforeMount } from "vue";
import { isClient } from "@fish-bubble-design/shared/utils";
import { useNamespace } from "@fish-bubble-design/hooks";
import { IPopperContentProps, popperContentEmits } from "./content-type";
import { usePopperContent } from "./composables/use-content";
import { getParent } from "./utils";

defineOptions({
  name: "PopperContent",
  inheritAttrs: false
});

const prefix = useNamespace("popper").b();

const emit = defineEmits(popperContentEmits);

const props = defineProps<IPopperContentProps>();

const { contentRef, triggerRef, instanceRef, contentStyle, contentClass, contentAttrs, update, role } = usePopperContent(props, prefix);

// Has it been destroyed
const isDestroyed = ref(false);

// During SSR - insertion is not allowed by default, move to the target container
const isSSR = ref(true);

// container
const container = shallowRef<HTMLElement | null>(null);

const transitionClass = computed(() => {
  return props.transition || `${prefix}-scale-up-transition`;
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
    // Change to Teleport
    isSSR.value = false;
  }
});

onMounted(() => {
  createMountContainer();
});

onBeforeUnmount(() => {
  isDestroyed.value = true;
});

// When the element has been removed from the DOM
const onAfterLeave = (e) => {
  emit("hide", e);
};

// Called when the transition is complete
const onAfterShow = (e) => {
  emit("show", e);
};

const updatePopper = () => update();

defineExpose({
  /** popper content element */
  contentRef,
  /** popperjs instance */
  popperInstanceRef: instanceRef,
  /** updatePopper */
  updatePopper
});
</script>
