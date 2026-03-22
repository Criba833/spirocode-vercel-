<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title:
      "Arquitectura tecnológica para empresas que están listas para escalar.",
    description:
      "Somos una consultora tecnológica especializada en desarrollo web moderno y construcción de plataformas escalables. Diseñamos soluciones enfocadas en eficiencia operativa, integración real y crecimiento sostenible.",
  },
);
</script>

<template>
  <section class="hero">
    <!-- Background -->
    <div class="hero__bg">
      <img
        src="/image/bg-hero-img.png"
        alt=""
        class="hero__bg-img"
        aria-hidden="true"
      />
      <div class="hero__bg-overlay" />
    </div>

    <!-- Content -->
    <LayoutContainer>
      <div class="hero__content">
        <h1 class="hero__title">
          {{ title }}
        </h1>
        <p class="hero__description">
          {{ description }}
        </p>
        <div class="hero__actions">
          <UiButton variant="primary" size="lg">
            Agendar conversacion
          </UiButton>
          <UiButton variant="secondary" size="lg">
            Explorar soluciones
          </UiButton>
        </div>
      </div>
    </LayoutContainer>

    <!-- Scroll Indicator -->
    <div class="hero__scroll">
      <span class="hero__scroll-text">Scroll</span>
      <div class="hero__scroll-line" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-block: 6rem 4rem;
  overflow: hidden;
}

/* ========================================
   Background
   ======================================== */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.4;
}

.hero__bg-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(15, 21, 31, 0.4) 0%,
    var(--color-bg) 70%
  );
}

/* ========================================
   Content
   ======================================== */
.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
  max-width: 1099px;
  margin-inline: auto;
}

.hero__title {
  font-family: var(--font-primary);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  line-height: 1.2;
  color: #d9d9d9;
  letter-spacing: 0;
  max-width: 100%;
}

.hero__description {
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.4;
  color: #d9d9d9;
  max-width: 100%;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

/* ========================================
   Scroll Indicator
   ======================================== */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.5;
}

.hero__scroll-text {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, var(--color-accent) 0%, transparent 100%);
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scaleY(0.8);
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
  }
}

@media (min-width: 768px) {
  .hero {
    padding-block: 8rem 5rem;
  }

  .hero__title {
    font-size: clamp(2rem, 5vw, 2.5rem);
  }

  .hero__description {
    font-size: 1.25rem;
  }
}
</style>
