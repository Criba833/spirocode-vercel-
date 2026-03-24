<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, onUnmounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

defineProps<{
  text: string;
  textColor?: "dark" | "light";
  backgroundImage?: string;
}>();

const root = ref<HTMLElement>();
const trackRef = ref<HTMLElement>();
let marqueeTween: gsap.core.Tween | null = null;
let scrollTimeout: number | null = null;

onMounted(() => {
  if (!trackRef.value) return;

  try {
    const track = trackRef.value;
    const textElements = track.querySelectorAll(".big-text-section__text");
    if (!textElements.length) return;

    const textWidth = (textElements[0] as HTMLElement).offsetWidth;

    // Set initial position - center text
    gsap.set(track, { x: 0 });

    // Faster infinite marquee - full page width movement
    const moveDistance = textWidth + 200;

    marqueeTween = gsap.to(track, {
      x: -moveDistance,
      duration: 30,
      repeat: -1,
      ease: "none",
      paused: true,
    });

    // Opacity animation based on scroll position
    const textElementsArray = Array.from(textElements);
    textElementsArray.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: root.value,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        },
      );
    });

    // Scroll-controlled speed and direction
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let direction = 1;

    const updateDirection = () => {
      const currentScrollY = window.scrollY;
      direction = currentScrollY > lastScrollY ? 1 : -1;
      lastScrollY = currentScrollY;
    };

    ScrollTrigger.create({
      trigger: root.value,
      start: "top bottom",
      end: "bottom top",
      onUpdate: () => {
        if (marqueeTween && !marqueeTween.isActive()) {
          marqueeTween.play();
        }

        updateDirection();
        scrollVelocity = Math.abs(window.scrollY - lastScrollY);

        // Speed based on scroll velocity
        const baseSpeed = 0.5;
        const velocityBonus = Math.min(scrollVelocity * 0.03, 2);
        const timeScale =
          direction === 1
            ? baseSpeed + velocityBonus
            : -(baseSpeed + velocityBonus);

        if (marqueeTween) {
          gsap.to(marqueeTween, {
            timeScale,
            overwrite: true,
            duration: 0.2,
          });
        }
      },
    });

    // Reset speed when not scrolling
    const handleScroll = () => {
      if (scrollTimeout !== null) clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        if (marqueeTween) {
          gsap.to(marqueeTween, { timeScale: 1, duration: 0.5 });
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Store for cleanup
    (window as any).__bigTextScrollHandler = handleScroll;
  } catch (error) {
    console.error("BigText animation error:", error);
  }
});

onUnmounted(() => {
  // Clean up animations and triggers
  if (marqueeTween) {
    marqueeTween.kill();
  }
  if (scrollTimeout !== null) {
    clearTimeout(scrollTimeout);
  }

  const handler = (window as any).__bigTextScrollHandler;
  if (handler) {
    window.removeEventListener("scroll", handler);
    delete (window as any).__bigTextScrollHandler;
  }

  gsap.killAll();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <div ref="root" class="big-text-section">
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
      <div ref="trackRef" class="big-text-section__track">
        <span
          class="big-text-section__text"
          :class="[`big-text-section__text--${textColor || 'dark'}`]"
        >
          {{ text }}
        </span>
        <span
          class="big-text-section__text big-text-section__text--repeat"
          :class="[`big-text-section__text--${textColor || 'dark'}`]"
        >
          {{ text }}
        </span>
      </div>
    </LayoutContainer>
  </div>
</template>

<style scoped>
.big-text-section {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 500px;
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
    180deg,
    rgba(25, 37, 55, 0) 0%,
    rgba(25, 37, 55, 0.9) 60%,
    rgba(71, 106, 157, 0) 100%
  );
}

.big-text-section__content {
  position: relative;
  z-index: 1;
  width: 100vw;
  max-width: 100vw;
  margin-inline: calc(50% - 50vw);
  overflow: hidden;
}

.big-text-section__track {
  display: flex;
  gap: 8rem;
  width: max-content;
  will-change: transform;
}

.big-text-section__text {
  font-family: "Qualy", serif;
  font-size: clamp(4rem, 15vw, 14rem);
  font-weight: 400;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  flex-shrink: 0;
  transition: opacity 0.3s ease;
}

.big-text-section__text--repeat {
  color: inherit;
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
