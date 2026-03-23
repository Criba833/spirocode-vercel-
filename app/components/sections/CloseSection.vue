<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
  }>(),
  {
    title:
      "Si la tecnología es un factor clave para la evolución de tu empresa, probablemente deberíamos聊聊.",
    subtitle: "Tu software debe generar ventaja competitiva.",
  },
);
</script>

<template>
  <LayoutSection background="secondary" class="close">
    <LayoutContainer>
      <div class="close__grid">
        <div class="close__col-1">
          <p class="close__title">
            {{ title }}
          </p>
        </div>
        <div class="close__col-2">
          <p class="close__subtitle">
            {{ subtitle }}
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
.close {
  padding-block: 5rem;
}

.close__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 768px) {
  .close__grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.close__title {
  font-family: "Qualy", serif;
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 400;
  line-height: 1.3;
  color: #d9d9d9;
}

.close__col-2 {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.close__subtitle {
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-text);
}

.close__cta {
  align-self: flex-start;
}
</style>
