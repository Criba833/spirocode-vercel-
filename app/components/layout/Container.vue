<script setup lang="ts">
defineProps<{
  fluid?: boolean
}>()
</script>

<template>
  <div class="container" :class="{ 'container--fluid': fluid }">
    <slot />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding-inline: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-inline: 2rem;
  }
}

.container--fluid {
  max-width: none;
}
</style>
