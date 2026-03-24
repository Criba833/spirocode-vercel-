<script setup lang="ts">
withDefaults(
  defineProps<{
    intro?: string;
    title?: string;
    subtitle?: string;
  }>(),
  {
    intro:
      "Si tu arquitectura tecnológica limita el crecimiento de tu empresa, es momento de rediseñarla.",
    title: "Tu software debe generar",
    subtitle: "ventaja competitiva.",
  },
);
</script>

<template>
  <LayoutSection size="lg" background="gradient" class="close">
    <LayoutContainer>
      <div class="close__grid">
        <div class="close__col">
          <h2 class="close__title">Tu software debe generar</h2>
          <span class="close__title--accent"> ventaja competitiva. </span>
        </div>
        <div class="close__col">
          <p class="close__description">
            {{ intro }}
          </p>
          <UiButton variant="primary" size="lg" class="close__cta">
            Agenda una conversación
          </UiButton>
        </div>
      </div>
    </LayoutContainer>
  </LayoutSection>
</template>
<style scoped>
.close__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .close__grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.close__col {
  display: flex;
  flex-direction: column;
}

.close__description {
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-light);
}

.close__title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text-light);
  display: block;
}

.close__title--accent {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3vw, 3.25rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-accent);
  display: block;
}

.close__cta {
  align-self: flex-start;
  margin-top: 1.5rem;
}
</style>
