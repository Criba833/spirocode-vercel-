<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  description?: string
  bigText?: string
}>(), {
  title: "Pensamos en sistemas. Construimos para escalar.",
  subtitle: "No somos una agencia digital.",
  description: "Somos un equipo senior que combina consultoría tecnológica y desarrollo de producto para resolver desafíos operativos complejos.",
  bigText: "Diseñamos sistemas para crecer.",
})
</script>

<template>
  <div class="about">
    <SectionsBigTextSection
      :text="bigText"
      text-color="dark"
      background-image="/svg/world-svg.svg"
    />
    <LayoutSection background="secondary" class="about__content">
      <LayoutContainer>
        <div class="about__grid">
          <div class="about__col-1">
            <img
              src="/image/svg-world-tech-icons.svg"
              alt="Tecnología"
              class="about__image"
            />
          </div>
          <div class="about__col-2">
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
  </div>
</template>

<style scoped>
.about__content {
  padding-block: 5rem;
}

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

.about__image {
  width: 100%;
  max-width: 551px;
  height: auto;
  opacity: 0.8;
}

.about__col-2 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__title {
  font-family: "Qualy", serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 1.2;
  color: #d9d9d9;
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
  color: #d9d9d9;
}
</style>
