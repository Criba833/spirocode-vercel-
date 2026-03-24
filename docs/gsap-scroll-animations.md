# GSAP Scroll Animations

This document details all GSAP scroll-triggered animations implemented on the SpiroCode website, following patterns from outcrowd.io analysis.

## Overview

All animations use **GSAP + ScrollTrigger** (free, no Club GSAP required).

| Technique | Description | Usage |
|-----------|-------------|-------|
| **Text Reveal** | Word split + stagger fade-in on scroll | Hero, Problem |
| **Batch Reveal** | Multiple elements animate in sequence | Services cards |
| **Parallax** | Background moves at different speed than scroll | Hero bg, HowWeDo |
| **Scrub** | Animation tied directly to scroll position | Watermarks |
| **Fade + Scale** | Simple entrance animations | About, CTA |
| **Sequential Reveal** | One-by-one element animation | Tech cards |

---

## Composables

### useTextReveal.ts
Word-split text reveal with blur-to-clear effect.

**Location:** `app/composables/useTextReveal.ts`

**Usage:**
```ts
const title = ref<HTMLElement>()
useTextReveal(title)
```

**Options:**
- `stagger: number` - Delay between words (default: 0.05)
- `duration: number` - Animation duration (default: 0.8)
- `y: number` - Initial Y offset (default: 40)
- `blur: number` - Initial blur amount (default: 10)

---

### useBatchReveal.ts
Batch processing for multiple elements with stagger.

**Location:** `app/composables/useBatchReveal.ts`

**Usage:**
```ts
useBatchReveal('.service-card')
```

---

### useHorizontalScroll.ts
Pinned horizontal scroll section.

**Location:** `app/composables/useHorizontalScroll.ts`

**Usage:**
```vue
<template>
  <div ref="container" class="overflow-hidden">
    <div ref="track" class="flex">
      <div class="panel w-screen shrink-0">Content</div>
    </div>
  </div>
</template>

<script setup>
const container = ref()
const track = ref()
useHorizontalScroll(container, track)
</script>
```

---

### useGsap.ts
General GSAP context wrapper with auto-cleanup.

**Location:** `app/composables/useGsap.ts`

**Usage:**
```ts
const root = ref()
useGsap(() => {
  gsap.from('.element', { y: 60, opacity: 0 })
}, root)
```

---

## Phase 1: Text Reveal Animations

### Hero Section
**File:** `app/components/sections/Hero.vue`

**Effect:** Full section animated on scroll:
- Background: parallax effect (moves at 30% of scroll speed)
- Title: word-split text reveal with blur-to-clear
- Description: fade-in from below
- CTA buttons: staggered fade-in (one after another)

**Elements Animated:**
- `.hero__bg` - Background image with parallax
- `.hero__title` - Main headline (text reveal)
- `.hero__description` - Description fade-in
- `.hero__actions` - CTA buttons (staggered)

**Implementation:** `useTextReveal` + `useGsap` with ScrollTrigger

---

### Problem Section
**File:** `app/components/sections/Problem.vue`

**Effect:** Title + description animate on scroll.

**Elements Animated:**
- `.problem__title` - Section title (text reveal)
- `.problem__description` - Description fade-in

**Implementation:** `useTextReveal` + `useGsap`

---

## Phase 2: Card/Grid Animations

### Services Section
**File:** `app/components/sections/Services.vue`

**Effect:** Header text + service cards reveal on scroll.

**Elements Animated:**
- `.services__header` - Subtitle, title, description (staggered fade-in)
- `.card` - Each service card (batch reveal)

**Implementation:** `useBatchReveal` + `useGsap`

---

### Tech Section
**File:** `app/components/sections/Tech.vue`

**Effect:** Header text + tech cards reveal sequentially.

**Elements Animated:**
- `.tech__header` - Subtitle, title, description (staggered fade-in)
- `.tech__card` - Each tech card (sequential reveal)

**Implementation:** `useGsap` with ScrollTrigger

---

## Phase 3: Parallax & Scrub Animations

### Hero Section
**File:** `app/components/sections/Hero.vue`

**Effect:** Parallax background image moves slower than scroll.

**Elements Animated:**
- `.hero__bg` - Background image/planet

**Implementation:** `useGsap` with `scrub: true`

---

### Hero Watermark
**File:** `app/components/sections/Hero.vue`

**Effect:** Watermark text moves at different speed (slower scrub = deeper feel).

**Elements Animated:**
- `.hero__watermark` - Background watermark text

**Implementation:** `useGsap` with `scrub: 2` (2s catch-up delay)

---

### About Section
**File:** `app/components/sections/About.vue`

**Effect:** Fade in from left + illustration scale.

**Elements Animated:**
- `.about__image` - Illustration/image
- `.about__content` - Text content

**Implementation:** `useGsap` with ScrollTrigger

---

### HowWeDo Section
**File:** `app/components/sections/HowWeDo.vue`

**Effect:** Watermark text horizontal scrub.

**Elements Animated:**
- `.how-we-do__watermark` - Background watermark

**Implementation:** `useGsap` with `xPercent` + `scrub: true`

---

## Phase 4: CTA & Polish

### Close Section (CTA)
**File:** `app/components/sections/Close.vue`

**Effect:** Scale up + fade entrance.

**Elements Animated:**
- `.close__content` - Main content area

**Implementation:** `useGsap` with scale + opacity

---

### Brands Section
**File:** `app/components/sections/Brands.vue`

**Effect:** Existing marquee loop + scroll-triggered opacity.

**Elements Animated:**
- `.brands__marquee` - Marquee container

**Implementation:** `useGsap` (optional enhancement)

---

### BigText Section
**File:** `app/components/sections/BigText.vue`

**Effect:** Large text animation (needs improvement for infinite/repeat).

**Elements Animated:**
- `.big-text-section__text` - Big text element

**Implementation:** `useGsap` timeline (needs enhancement)

---

## Animation Checklist

- [x] Phase 1: Full Hero animation (bg parallax, title, description, CTA)
- [x] Phase 1: Full Problem animation (title + description)
- [x] Phase 2: Full Services animation (header + cards)
- [x] Phase 2: Full Tech animation (header + cards)
- [ ] Phase 3: Parallax (Hero bg) - **NOW COMPLETE** (part of full Hero animation)
- [ ] Phase 3: Scrub (Hero watermark) - need to check if exists
- [ ] Phase 3: Fade + Scale (About)
- [ ] Phase 3: Scrub (HowWeDo watermark)
- [ ] Phase 4: Scale + Fade (Close CTA)
- [ ] Phase 4: Brands enhancement (optional)
- [ ] Phase 4: BigText improvement

---

## Dependencies

```json
{
  "gsap": "^3.x",
  "gsap": "ScrollTrigger"
}
```

Install:
```bash
pnpm add gsap
```

Register plugin in `app/plugins/gsap.client.ts`:
```ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)
})
```

---

## References

- [GSAP ScrollTrigger Documentation](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Outcrowd.io](https://tcrowd.io) - Design inspiration
- [Free GSAP Tutorials](https://greensock.com/learn)