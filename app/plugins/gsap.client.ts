// app/plugins/gsap.client.ts
// .client.ts suffix = Nuxt 4 SSR guard — never runs on server
// This plugin only executes in the browser

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default defineNuxtPlugin(() => {
  // Ensure we're in browser environment
  if (typeof window !== "undefined") {
    // Register plugins once globally — do NOT register inside components
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Prevent ScrollTrigger batch timeout issues
    ScrollTrigger.batch(".scroll-trigger", {
      onEnter: (batch) => batch.forEach((trigger) => trigger.getPosition()),
      interval: 100,
    });
  }

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  };
});
