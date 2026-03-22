<script setup lang="ts">
import type { HTMLAttributes } from "vue"

interface Props extends /* @vue-ignore */ HTMLAttributes {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  disabled?: boolean
  href?: string
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  loading: false,
  disabled: false,
  external: false,
})

const isDisabled = computed(() => props.disabled || props.loading)
</script>

<template>
  <component
    :is="href ? (external ? 'a' : resolveComponent('NuxtLink')) : 'button'"
    :href="href"
    :to="href && !external ? href : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="btn"
    :class="[
      `btn--${variant}`,
      `btn--${size}`,
      { 'btn--loading': loading, 'btn--disabled': isDisabled }
    ]"
    :disabled="isDisabled && !href"
  >
    <span v-if="loading" class="btn__spinner" aria-hidden="true">
      <svg class="btn__spinner-icon" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.25" />
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
      </svg>
    </span>
    <span class="btn__content" :class="{ 'btn__content--hidden': loading }">
      <slot />
    </span>
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-primary);
  font-weight: 600;
  border-radius: 24px;
  transition: all var(--transition-fast);
  position: relative;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

/* ========================================
   Sizes
   ======================================== */
.btn--sm {
  height: 36px;
  padding-inline: 1.25rem;
  font-size: 0.875rem;
}

.btn--md {
  height: 44px;
  padding-inline: 1.5rem;
  font-size: 1rem;
}

.btn--lg {
  height: 51px;
  padding-inline: 1.5rem;
  font-size: 1rem;
}

/* ========================================
   Variants
   ======================================== */
.btn--primary {
  background-color: #0f1520;
  color: #ccfa00;
  border: 1px solid #ccfa00;
}

.btn--primary:hover:not(.btn--disabled) {
  background-color: #ccfa00;
  color: #0f1520;
  border-color: #ccfa00;
  transform: translateY(-2px);
}

.btn--primary:active:not(.btn--disabled) {
  transform: translateY(0);
}

.btn--secondary {
  background-color: #ccfa00;
  color: #0f1520;
  border: 1px solid #ccfa00;
}

.btn--secondary:hover:not(.btn--disabled) {
  background-color: #b8e600;
  border-color: #b8e600;
  transform: translateY(-2px);
}

.btn--secondary:active:not(.btn--disabled) {
  transform: translateY(0);
}

.btn--ghost {
  background-color: transparent;
  color: #d9d9d9;
}

.btn--ghost:hover:not(.btn--disabled) {
  background-color: rgba(255, 255, 255, 0.1);
}

/* ========================================
   States
   ======================================== */
.btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.btn--loading {
  cursor: wait;
}

/* ========================================
   Spinner
   ======================================== */
.btn__spinner {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn__spinner-icon {
  width: 1.25em;
  height: 1.25em;
  animation: btn-spin 0.8s linear infinite;
}

.btn__content--hidden {
  visibility: hidden;
}

@keyframes btn-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
