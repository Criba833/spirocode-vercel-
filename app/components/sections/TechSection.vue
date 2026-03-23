<script setup lang="ts">
const clients = [
  {
    title: "Startups B2B en crecimiento",
    description:
      "Equipos que necesitan construir productos tecnológicos sólidos desde el inicio.",
    icon: "i-ph-rocket-launch",
  },
  {
    title: "Equipos que modernizan",
    description:
      "Empresas que necesitan evolucionar sistemas legacy hacia arquitecturas modernas.",
    icon: "i-ph-arrows-clockwise",
  },
  {
    title: "Empresas que automatizan",
    description:
      "Organizaciones que quieren eliminar procesos manuales, reducir fricción operativa.",
    icon: "i-ph-gear",
  },
  {
    title: "Operaciones con fricción",
    description:
      "Negocios donde la tecnología actual está frenando la eficiencia.",
    icon: "i-ph-warning-circle",
  },
];
</script>

<template>
  <div class="tech">
    <LayoutSection background="default" class="tech__content">
      <LayoutContainer>
        <div class="tech__header">
          <p class="tech__intro">
            No desarrollamos software por horas. Diseñamos sistemas que
            sostienen el crecimiento del negocio.
          </p>
          <div class="tech__header-row">
            <h2 class="tech__title">
              Trabajamos con organizaciones que entienden que
            </h2>
            <span class="tech__accent-text"
              >la tecnología define su crecimiento.</span
            >
          </div>
        </div>
        <div class="tech__grid">
          <div v-for="client in clients" :key="client.title" class="tech__card">
            <div class="tech__card-icon">
              <div :class="client.icon" />
            </div>
            <h3 class="tech__card-title">{{ client.title }}</h3>
            <p class="tech__card-description">{{ client.description }}</p>
          </div>
        </div>
      </LayoutContainer>
    </LayoutSection>
  </div>
</template>

<style scoped>
.tech__content {
  padding-block: 5rem;
}

.tech__header {
  max-width: 800px;
  margin-bottom: 3rem;
}

.tech__intro {
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  color: #d9d9d9;
  margin-bottom: 1rem;
}

.tech__header-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.75rem;
}

.tech__title {
  font-family: "Lato", sans-serif;
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 400;
  line-height: 1.5;
  color: #d9d9d9;
}

.tech__accent-text {
  font-family: "Qualy", serif;
  font-size: clamp(1.5rem, 3vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-accent);
}

.tech__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .tech__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .tech__grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

.tech__card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: var(--color-bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.tech__card:hover {
  border-color: rgba(206, 252, 0, 0.3);
  transform: translateY(-4px);
}

.tech__card-icon {
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

.tech__card-title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-light);
}

.tech__card-description {
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  color: var(--color-text);
  line-height: 1.6;
}
</style>
