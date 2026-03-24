<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    description?: string;
  }>(),
  {
    title: "Pensamos en sistemas. Construimos para escalar.",
    subtitle: "No somos una agencia digital.",
    description:
      "Somos un equipo senior que combina consultoría tecnológica y desarrollo de producto para resolver desafíos operativos complejos.",
    bigText: "Diseñamos sistemas para crecer.",
  },
);
</script>

<template>
  <LayoutSection size="lg" background="gradient" class="about">
      <LayoutContainer>
        <div class="about__grid">
          <div class="about__col">
            <img
              src="/image/svg-world-tech-icons.svg"
              alt="Tecnología"
              class="about__image"
            />
          </div>
          <div class="about__col">
            <h2 class="about__title">
              {{ title }}
            </h2>
            <p class="about__subtitle">
              {{ subtitle }}
            </p>
            <p class="about__description">
              {{ description }}
            </p>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.about__col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__image {
  width: 100%;
  max-width: 551px;
  height: auto;
  opacity: 0.8;
}

.about__title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text-light);
}

.about__subtitle {
  font-family: var(--font-primary);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-accent);
}

.about__description {
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-light);
}
</style>
