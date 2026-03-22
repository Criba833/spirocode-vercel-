<script setup lang="ts">
const steps = [
  {
    number: 1,
    title: "Diagnóstico",
    description: "Analizamos procesos, sistemas y puntos de fricción que afectan la operación.",
    tags: ["Automatización", "Integración", "Arquitectura"],
  },
  {
    number: 2,
    title: "Arquitectura",
    description: "Diseñamos la estructura tecnológica que permitirá crecer sin generar caos.",
    tags: ["Sistemas conectados", "Escalabilidad", "Eficiencia operativa"],
  },
  {
    number: 3,
    title: "Desarrollo",
    description: "Construimos soluciones robustas y adaptadas a la operación del negocio.",
    tags: ["Software a medida", "Automatización", "Integraciones"],
  },
  {
    number: 4,
    title: "Evolución",
    description: "Medimos, optimizamos y mejoramos continuamente la arquitectura tecnológica.",
    tags: ["Optimización", "Nuevas capacidades", "Crecimiento sostenible"],
  },
]
</script>

<template>
  <div class="how-we-do">
    <SectionsBigTextSection
      text="Como lo hacemos"
      text-color="dark"
      background-image="/svg/world-svg.svg"
    />
    <LayoutSection background="secondary" class="how-we-do__content">
      <LayoutContainer>
        <div class="how-we-do__intro">
          <p class="how-we-do__intro-text">
            El software no es solo código.
          </p>
          <div class="how-we-do__intro-row">
            <h2 class="how-we-do__title">Cómo lo hacemos</h2>
            <span class="how-we-do__accent-text">antes que código.</span>
          </div>
        </div>
        <div class="how-we-do__grid">
          <div
            v-for="step in steps"
            :key="step.number"
            class="how-we-do__card"
          >
            <div class="how-we-do__card-number">{{ step.number }}</div>
            <h3 class="how-we-do__card-title">{{ step.title }}</h3>
            <p class="how-we-do__card-description">{{ step.description }}</p>
            <div class="how-we-do__card-tags">
              <span
                v-for="tag in step.tags"
                :key="tag"
                class="how-we-do__card-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
  </div>
</template>

<style scoped>
.how-we-do__content {
  padding-block: 5rem;
}

.how-we-do__intro {
  max-width: 800px;
  margin-bottom: 3rem;
}

.how-we-do__intro-text {
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  color: #d9d9d9;
  margin-bottom: 1rem;
}

.how-we-do__intro-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.75rem;
}

.how-we-do__title {
  font-family: "Qualy", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  color: #d9d9d9;
}

.how-we-do__accent-text {
  font-family: "Qualy", serif;
  font-size: clamp(1.5rem, 3vw, 3.5rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-accent);
}

.how-we-do__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .how-we-do__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .how-we-do__grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

.how-we-do__card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--color-bg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
}

.how-we-do__card-number {
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

.how-we-do__card-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-light);
}

.how-we-do__card-description {
  font-family: "Lato", sans-serif;
  font-size: 0.9375rem;
  color: var(--color-text);
  line-height: 1.6;
  flex: 1;
}

.how-we-do__card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.how-we-do__card-tag {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-full);
}
</style>
