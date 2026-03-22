<script setup lang="ts">
defineProps<{
  text: string
  textColor?: "dark" | "light"
  backgroundImage?: string
}>()
</script>

<template>
  <div class="big-text-section">
    <div class="big-text-section__bg">
      <img
        v-if="backgroundImage"
        :src="backgroundImage"
        alt=""
        class="big-text-section__bg-img"
        aria-hidden="true"
      />
      <div class="big-text-section__bg-overlay" />
    </div>
    <LayoutContainer class="big-text-section__content">
      <span class="big-text-section__text" :class="[`big-text-section__text--${textColor || 'dark'}`]">
        {{ text }}
      </span>
    </LayoutContainer>
  </div>
</template>

<style scoped>
.big-text-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  overflow: hidden;
}

.big-text-section__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.big-text-section__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.3;
}

.big-text-section__bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(25, 37, 55, 0) 0%,
    rgba(25, 37, 55, 0.9) 50%,
    rgba(71, 106, 157, 0) 100%
  );
}

.big-text-section__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.big-text-section__text {
  font-family: "Qualy", serif;
  font-size: clamp(3rem, 12vw, 11rem);
  font-weight: 400;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  user-select: none;
}

.big-text-section__text--dark {
  color: #344256;
}

.big-text-section__text--light {
  color: #999d9e;
}

.big-text-section__text--accent {
  color: var(--color-accent);
}
</style>
