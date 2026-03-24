// app/plugins/gsap.client.ts
// .client.ts suffix = Nuxt 4 SSR guard — never runs on server
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register once globally — do NOT register inside components
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  };
});
