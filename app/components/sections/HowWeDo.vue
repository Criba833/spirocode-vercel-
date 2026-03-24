<script setup lang="ts">
const steps = [
  {
    number: 1,
    title: "Diagnóstico",
    description:
      "Analizamos procesos, sistemas y puntos de fricción que afectan la operación.",
    tags: ["Automatización", "Integración", "Arquitectura"],
  },
  {
    number: 2,
    title: "Arquitectura",
    description:
      "Diseñamos la estructura tecnológica que permitirá crecer sin generar caos.",
    tags: ["Sistemas conectados", "Escalabilidad", "Eficiencia operativa"],
  },
  {
    number: 3,
    title: "Desarrollo",
    description:
      "Construimos soluciones robustas y adaptadas a la operación del negocio.",
    tags: ["Software a medida", "Automatización", "Integraciones"],
  },
  {
    number: 4,
    title: "Evolución",
    description:
      "Medimos, optimizamos y mejoramos continuamente la arquitectura tecnológica.",
    tags: ["Optimización", "Nuevas capacidades", "Crecimiento sostenible"],
  },
];
</script>

<template>
  <LayoutSection size="lg" background="gradient" class="how-we-do">
      <LayoutContainer>
        <div class="how-we-do__header">
          <div class="how-we-do__col">
            <h2 class="how-we-do__title">Arquitectura</h2>
            <span class="how-we-do__title--accent"> antes que código. </span>
          </div>
          <div class="how-we-do__col">
            <p class="how-we-do__description">
              Cada proyecto comienza entendiendo cómo funciona realmente el
              negocio. Antes de desarrollar software, analizamos procesos,
              sistemas existentes y objetivos de crecimiento para diseñar una
              arquitectura tecnológica capaz de sostener el futuro de la
              organización.
            </p>
          </div>
        </div>
        <div class="how-we-do__grid">
          <div v-for="step in steps" :key="step.number" class="how-we-do__card">
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
</template>

<style scoped>
.how-we-do__header {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .how-we-do__header {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}

.how-we-do__col {
  display: flex;
  flex-direction: column;
}

.how-we-do__title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-accent);
  display: block;
}

.how-we-do__title--accent {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text-light);
  display: block;
  margin-top: 0.25rem;
}

.how-we-do__description {
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-light);
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
  background-color: var(--color-primary);
  color: var(--color-accent);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.25rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-accent);
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
