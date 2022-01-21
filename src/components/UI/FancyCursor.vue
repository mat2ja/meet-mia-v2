<script setup>
const xChild = ref(0);
const yChild = ref(0);
const xParent = ref(0);
const yParent = ref(0);
const hover = ref(false);
const hideCursor = ref(true);

const cursorCircle = computed(() => {
  return `transform: translateX(${xParent.value}px) translateY(${yParent.value}px) translateZ(0) translate3d(0, 0, 0);`;
});
const cursorPoint = computed(() => {
  return `transform: translateX(${xChild.value - 3}px) translateY(${
    yChild.value - 3
  }px) translateZ(0) translate3d(0, 0, 0);`;
});

const moveCursor = (e) => {
  xChild.value = e.clientX;
  yChild.value = e.clientY;
  // setTimeout(() => {
  //   xParent.value = e.clientX - 15;
  //   yParent.value = e.clientY - 15;
  // }, 50);
};

onMounted(() => {
  document.addEventListener('mousemove', moveCursor);
  document.addEventListener('mouseleave', (e) => {
    hideCursor.value = true;
  });
  document.addEventListener('mouseenter', (e) => {
    hideCursor.value = false;
  });
});
</script>

<template>
  <div
    :class="[
      'g-cursor',
      { 'g-cursor_hover': hover },
      { 'g-cursor_hide': hideCursor },
    ]"
  >
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div ref="point" class="g-cursor__point" :style="cursorPoint"></div>
  </div>
</template>

<style lang="scss" scoped>
.g-cursor {
  display: none;
  @media (pointer: coarse) {
    display: none;
  }
  &_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width 500ms ease-in-out, height 500ms ease-in-out,
      opacity 500ms ease-in-out;
    display: none;
  }

  &__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 40px;
    height: 40px;
    border: 2px solid var(--burg-700);
    border-radius: 100%;
    z-index: 55555;
    backface-visibility: hidden;
    transition: opacity 500ms ease-in-out;
  }

  &__point {
    top: 0;
    left: 0;
    position: fixed;
    width: 15px;
    height: 15px;
    pointer-events: none;
    user-select: none;
    border-radius: 100rem;
    background: var(--burg-700);
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
  }

  &_hover {
    .g-cursor__circle {
      width: 60px;
      height: 60px;
      transform: scale(3);
      transition: width 500ms ease-in-out, height 500ms ease-in-out,
        opacity 500ms ease-in-out;
    }
  }
}
</style>
