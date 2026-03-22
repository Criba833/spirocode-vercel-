<script setup lang="ts">
defineProps<{
  text: string
  color?: "dark" | "light"
}>()
</script>

<template>
  <span class="big-text" :class="[`big-text--${color || 'light'}`]">
    {{ text }}
  </span>
</template>

<style scoped>
.big-text {
  font-family: "Qualy", serif;
  font-size: clamp(4rem, 15vw, 12rem);
  font-weight: 400;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
}

.big-text--dark {
  color: #344256;
}

.big-text--light {
  color: #999d9e;
}
</style>
