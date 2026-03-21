# SpiroCode - Nuxt 4 Starter Template

A modern, lightweight Nuxt 4 starter template with UnoCSS for rapid Vue.js development.

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3)
- **Styling**: [UnoCSS](https://unocss.dev/) - Instant atomic CSS engine
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) via UnoCSS preset
- **Language**: TypeScript
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Features

- Nuxt 4 with Vue 3 Composition API
- UnoCSS with Tailwind-compatible utilities
- Phosphor Icons integration
- TypeScript support with auto-generated types
- Vue DevTools enabled for development
- File-based routing

## Project Structure

```
├── app/
│   └── app.vue           # Main application component
├── public/
│   ├── favicon.ico       # Site favicon
│   └── robots.txt        # Robots directives
├── nuxt.config.ts        # Nuxt configuration
├── uno.config.ts         # UnoCSS configuration
└── tsconfig.json         # TypeScript references
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build optimized production bundle |
| `pnpm preview` | Preview production build locally |
| `pnpm generate` | Generate static site (SSG) |
| `pnpm postinstall` | Prepare Nuxt types after install |

## UnoCSS Usage

UnoCSS provides utility classes similar to Tailwind CSS:

```vue
<template>
  <div class="flex items-center justify-center gap-4 p-8">
    <button class="px-4 py-2 bg-blue-500 text-white rounded-lg">
      Click me
    </button>
    <i class="i-ph-robot text-4xl text-gray-600" />
  </div>
</template>
```

### Icon Usage

Icons are prefixed with `i-ph-` followed by the Phosphor icon name:

```html
<!-- Solid icon -->
<i class="i-ph-rocket text-3xl" />

<!-- Regular icon -->
<i class="i-ph-robot text-3xl" />

<!-- Thin variant -->
<i class="i-ph-user-thin text-3xl" />
```

Browse all available icons at [icones.js.org](https://icones.js.org/).

## Configuration

### Nuxt Config

Edit `nuxt.config.ts` to customize your application:

```ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Your App Name",
    },
  },
})
```

### UnoCSS Config

Customize UnoCSS in `uno.config.ts`:

```ts
import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
});
```

## Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [UnoCSS Documentation](https://unocss.dev/)
- [Vue 3 Documentation](https://vuejs.org/)

## License

MIT
