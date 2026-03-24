<script setup lang="ts">
defineProps<{
  size?: "sm" | "md" | "lg" | "xl";
  background?: "default" | "secondary" | "accent" | "gradient";
  tag?: string;
}>();
</script>

<template>
  <component
    :is="tag || 'section'"
    class="section"
    :class="[
      `section--${size || 'md'}`,
      `section--bg-${background || 'default'}`,
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.section {
  padding-block: var(--section-py-md);
}

.section--sm {
  padding-block: var(--section-py-sm);
}

.section--lg {
  padding-block: var(--section-py-lg);
}

.section--xl {
  padding-block: var(--section-py-xl);
}

@media (min-width: 1024px) {
  .section {
    padding-block: var(--section-py-lg);
  }

  .section--lg {
    padding-block: var(--section-py-xl);
  }

  .section--xl {
    padding-block: 8rem;
  }
}

/* Background Variants */
.section--bg-default {
  background-color: var(--color-bg);
}

.section--bg-secondary {
  background-color: var(--color-bg-secondary);
}

.section--bg-accent {
  background-color: var(--color-accent);
}

.section--bg-gradient {
  background: var(--color-gradient);
}
</style>
