<script setup lang="ts">
interface CardService {
  icon?: string
  title: string
  description?: string
  link?: string
}

interface Props {
  variant?: "service" | "process" | "feature"
  title?: string
  description?: string
  icon?: string
  number?: string | number
  link?: string
  linkText?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: "service",
  linkText: "Ver más",
})

const cardData = computed<CardService>(() => ({
  icon: props.icon,
  title: props.title || "",
  description: props.description,
  link: props.link,
}))
</script>

<template>
  <article class="card" :class="`card--${variant}`">
    <!-- Icon (service/process) -->
    <div v-if="icon && variant === 'service'" class="card__icon">
      <div v-if="icon.startsWith('i-')" :class="icon" />
      <span v-else v-html="icon" />
    </div>

    <!-- Number (process) -->
    <div v-if="number && variant === 'process'" class="card__number">
      {{ number }}
    </div>

    <!-- Content -->
    <div class="card__content">
      <h3 v-if="title" class="card__title">{{ title }}</h3>
      <p v-if="description" class="card__description">{{ description }}</p>
    </div>

    <!-- Link -->
    <NuxtLink v-if="link" :to="link" class="card__link">
      {{ linkText }}
      <span class="card__link-arrow">→</span>
    </NuxtLink>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all var(--transition-base);
}

.card:hover {
  border-color: rgba(206, 252, 0, 0.3);
  transform: translateY(-4px);
}

/* ========================================
   Service Variant
   ======================================== */
.card--service {
  min-height: 280px;
}

.card--service .card__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(206, 252, 0, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-accent);
  font-size: 1.5rem;
}

/* ========================================
   Process Variant
   ======================================== */
.card--process {
  min-height: 200px;
}

.card--process .card__number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.25rem;
  border-radius: var(--radius-full);
}

/* ========================================
   Feature Variant
   ======================================== */
.card--feature {
  min-height: 160px;
  padding: 1.25rem;
}

/* ========================================
   Content
   ======================================== */
.card__content {
  flex: 1;
}

.card__title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin-bottom: 0.5rem;
}

.card__description {
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.6;
}

/* ========================================
   Link
   ======================================== */
.card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-accent);
  font-size: 0.875rem;
  font-weight: 500;
  transition: gap var(--transition-fast);
}

.card__link:hover {
  gap: 0.75rem;
}

.card__link-arrow {
  transition: transform var(--transition-fast);
}

.card__link:hover .card__link-arrow {
  transform: translateX(4px);
}
</style>
