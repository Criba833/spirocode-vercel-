<script setup lang="ts">
defineProps<{
  orientation?: "vertical" | "horizontal"
  gap?: "xs" | "sm" | "md" | "lg" | "xl"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around"
  wrap?: boolean
}>()
</script>

<template>
  <div
    class="stack"
    :class="[
      `stack--${orientation || 'vertical'}`,
      `stack--gap-${gap || 'md'}`,
      `stack--align-${align || 'stretch'}`,
      `stack--justify-${justify || 'start'}`,
      { 'stack--wrap': wrap }
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.stack {
  display: flex;
}

.stack--vertical {
  flex-direction: column;
}

.stack--horizontal {
  flex-direction: row;
}

/* Gap Sizes */
.stack--gap-xs {
  gap: 0.5rem;
}

.stack--gap-sm {
  gap: 1rem;
}

.stack--gap-md {
  gap: 1.5rem;
}

.stack--gap-lg {
  gap: 2rem;
}

.stack--gap-xl {
  gap: 3rem;
}

/* Alignment (cross-axis) */
.stack--align-start {
  align-items: flex-start;
}

.stack--align-center {
  align-items: center;
}

.stack--align-end {
  align-items: flex-end;
}

.stack--align-stretch {
  align-items: stretch;
}

/* Justify (main-axis) */
.stack--justify-start {
  justify-content: flex-start;
}

.stack--justify-center {
  justify-content: center;
}

.stack--justify-end {
  justify-content: flex-end;
}

.stack--justify-between {
  justify-content: space-between;
}

.stack--justify-around {
  justify-content: space-around;
}

/* Wrap */
.stack--wrap {
  flex-wrap: wrap;
}
</style>
