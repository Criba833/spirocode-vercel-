import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from "unocss";

import {
  colors,
  spacing,
  radius,
  shadows,
  fontSize,
} from "./utils/design-tokens";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        "simple-icons": () =>
          import("@iconify-json/simple-icons").then((i) => i.icons),
      },
    }),
  ],

  theme: {
    colors,
    spacing,
    borderRadius: radius,
    boxShadow: shadows,
    fontSize,
  },

  shortcuts: {
    btn: "px-4 py-2 rounded-md font-medium transition",

    "btn-primary": `
      btn
      bg-green-300
      text-black
      hover:bg-green-200
      active:bg-green-400
      disabled:opacity-50
      disabled:cursor-not-allowed
    `,

    card: `
      bg-blue-400
      border border-neutral-400
      rounded-lg
      p-4
      shadow-md
    `,

    container: "max-w-7xl mx-auto px-4",
  },
});
